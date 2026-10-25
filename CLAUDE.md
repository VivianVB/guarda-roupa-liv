# Guarda-Roupa da Liv — regras para o Claude

Contexto completo do projeto, catálogo e etapas: `PROJETO.md`.

## Como trabalhar com a usuária

- Responder sempre em português do Brasil, de forma simples e direta.
- **Perguntar antes de fazer** mudanças de funcionalidade ou de dados: apresentar as opções, recomendar uma e esperar a escolha.
- A usuária quer agilidade: entregar pronto e testado, sem pedir tarefas técnicas a ela.
- Ao terminar uma mudança no site, mandar o link com `?v=<commit>` para evitar a página antiga em cache (o GitHub Pages guarda por até 10 minutos).

## GitHub

- Usar sempre a conta **VivianVB**. Antes de qualquer push, conferir `gh api user -q .login`; se não for `VivianVB`, rodar `gh auth switch --hostname github.com --user VivianVB` (a conta ativa às vezes volta sozinha para outra conta).
- Branch `main`; o GitHub Pages publica a raiz da `main`. Depois do push, esperar o build do Pages e testar no site publicado.
- Repositório público por decisão da usuária (ver `PROJETO.md`); não tornar privado sem combinar a Etapa 2.

## Regras do catálogo

- Não presumir correspondências entre fotos e peças; na dúvida, deixar pendente para a usuária confirmar.
- Não excluir peças nem alterar correspondências sem confirmação.
- Preservar os nomes originais das fotos em `fotos/`; miniaturas ficam em `fotos/mini/`.
- Fotos marcadas como "Foto repetida" são descartadas no catálogo (a peça fica com uma foto só).
- Foto com várias peças: se as peças estão separadas na foto, recortar cada uma em `fotos/<original>-N.jpg` (com miniatura); se estão sobrepostas, criar um cartão por peça (`<original>-N.jpg` na página) apontando para a mesma imagem. A foto original continua em `fotos/` e sai da revisão. Feito na 147 (2 shorts), 154 e 156 (4 pares de meias cada) e 157 (5 pares), recortadas, e na 155 (3 babadores, mesma foto).
- Categoria "Moletom" não existe: moletons entram como **Casaco**.
- A **manga entra na categoria** de blusas, bodies, vestidos e pijamas: "Body manga curta", "Body manga longa", "Body sem manga", o mesmo para Blusa e Vestido, e "Pijama manga curta" / "Pijama manga longa". Peças cuja manga não está confirmada ficam só com "Body", "Blusa", "Vestido" ou "Pijama" até a usuária dizer.
- **Estação** (calor, meia estação, frio) é um campo da peça, não categoria.
- **Conservação** é um campo da peça com 4 opções: `nova` (nunca usada/com etiqueta), `boa` (usada, sem defeito), `desgastada` (bolinhas, desbotada, gasta), `defeito` (mancha, furo, rasgo, botão/zíper faltando; detalhe vai em Observação). Não preencher pela foto; no máximo citar o que se nota no texto da sugestão. **Padrão: `boa`** — a página mostra "Boa" quando o campo está vazio, e ao ler os dados um `conservacao` ausente vale `boa`.
- **Conjuntos são separados** em peças próprias (blusa, short, calça…), ligadas pelo campo `conjunto` ("faz conjunto com…"). Ficam como peça única só os **pijamas e macacões**. O conjunto térmico também é separado (blusa térmica + calça térmica). Quando a foto não permite recortar as peças, a foto vai para a lista **Refotografar** (`fotos/<id>.refotografar` com o motivo).

## Site principal (página privada no claude.ai) — provisório

- Página: https://claude.ai/artifact/Fh6duJeKMsEYtEmQbdmdLg (fonte em `artifact/revisao-fotos.html`; republicar sempre pelo mesmo caminho para manter o link). Abas: **Catálogo**, **Conferência** (peças ativas com campo vazio, aviso, sem foto ou para refotografar) e **Baixas**.
- É provisório: a usuária não quer depender do Claude para acessar. Plano de saída na Etapa 2 do `PROJETO.md`.
- Dados no banco da página, coleção `pecas/<id>` (ler/gravar com `ArtifactData`): `nome`, `categoria`, `tamanho`, `marca`, `estacao`, `serve` (`sim`/`grande`/`pequena`), `conservacao`, `conjunto`, `notes`, `foto` (url do asset), `foto_origem`, `rotacao`, `refotografar`, `aviso` (texto para a usuária resolver), `situacao` (`ativa`/`baixa`), `baixa_motivo` (`doada`, `vendida`, `passada`, `descartada`, `duplicada`), `baixa_data`.
- **Cópia aberta dos dados:** depois de qualquer mudança de dados feita pelo Claude, ou quando a usuária pedir, exportar `pecas` (ArtifactData `list` com `out_dir`) e rodar `node scripts/exportar-catalogo.js <pasta>/pecas` para gerar `dados/catalogo.json`; enviar ao GitHub. Não escrever textos com acento dentro de scripts `.ps1` (o PowerShell 5 lê como ANSI e quebra os acentos).
- Marca e tamanho são listas montadas com os valores já usados (com "＋ Novo…"). Manter grafia padrão: `Carter's`, `Bebê do Papai`, tamanhos como `18 meses`, `9-12 meses` (hífen comum). A Conferência tem seleção múltipla para aplicar marca, tamanho, estação e "serve?" em lote.
- Não gravar em lote enquanto a usuária está usando a página: as versões mudam a cada toque e o lote é recusado.
- Histórico: a revisão das fotos terminou em 25/10/2026 (85 conferidas, 7 excluídas, 3 refotografar). As coleções antigas `fotos`, `decisoes` e `catalogo` continuam no banco, sem uso; o site do GitHub Pages (`index.html`, `revisao.html`) é histórico.
