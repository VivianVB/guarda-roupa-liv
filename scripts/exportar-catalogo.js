// Builds dados/catalogo.json from a folder of piece files exported from the page database
// (one <id>.json per piece, as saved by ArtifactData "list" with out_dir).
// Usage: node scripts/exportar-catalogo.js <pasta-com-os-json>
const fs = require('fs'), path = require('path');
const dir = process.argv[2];
if (!dir) { console.error('Informe a pasta com os arquivos exportados.'); process.exit(1); }
const pecas = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort().map(f => {
  const raw = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  return Object.assign({ id: path.basename(f, '.json') }, raw.data || raw);
});
const out = path.join(__dirname, '..', 'dados', 'catalogo.json');
fs.writeFileSync(out, JSON.stringify({ gerado_em: new Date().toISOString().slice(0, 10), pecas }, null, 2) + '\n', 'utf8');
console.log(pecas.length + ' peças em ' + out);
