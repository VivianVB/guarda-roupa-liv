// Local preview of the private page (artifact/revisao-fotos.html) without claude.ai.
// Stubs window.claude with an in-memory database loaded from dados/catalogo.json and
// serves photos from fotos/mini, so the layout can be checked in a normal browser.
// Usage: node scripts/preview-server.js   →   http://localhost:8787
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), port = 8787;

const stub = `<script>
(function(){
  const data = fetch('/dados/catalogo.json').then(r => r.json()).then(j => {
    const m = {}; j.pecas.forEach(p => { const d = Object.assign({}, p); delete d.id;
      if (p.foto_origem) d.foto = '/fotos/mini/' + p.foto_origem; m[p.id] = d; }); return m; });
  const snap = docs => ({ docs, size: docs.length, empty: !docs.length, metadata: {},
    docChanges: () => docs.map(d => ({ type: 'added', doc: d })) });
  const docSnap = (id, d) => ({ id, exists: true, data: () => d, metadata: {} });
  const db = { collection: name => ({
    onSnapshot(next) { data.then(m => next(snap(name === 'pecas' ? Object.entries(m).map(([id, d]) => docSnap(id, d)) : []))); return () => {}; },
    doc: id => ({ set: async () => {}, update: async () => {}, delete: async () => {} }) }) };
  window.claude = { use: async n => n === 'db' ? db : null };
})();
</script>`;

const types = { '.jpg': 'image/jpeg', '.json': 'application/json; charset=utf-8', '.js': 'text/javascript' };
http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') {
    const page = fs.readFileSync(path.join(root, 'artifact', 'revisao-fotos.html'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end('<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<style>:root{color-scheme:light}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + stub + page + '</body></html>');
  }
  const file = path.join(root, url);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log('Prévia em http://localhost:' + port));
