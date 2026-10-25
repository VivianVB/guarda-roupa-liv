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
- Foto com várias peças: se as peças estão separadas na foto, recortar cada uma em `fotos/<original>-N.jpg` (com miniatura); se estão sobrepostas, criar um cartão por peça (`<original>-N.jpg` na página) apontando para a mesma imagem. A foto original continua em `fotos/` e sai da revisão. Feito na 157 (5 pares de meias, recortados) e na 155 (3 babadores, mesma foto).
- Categoria "Moletom" não existe: moletons entram como **Casaco**.
- A **manga entra na categoria** de blusas, bodies, vestidos e pijamas: "Body manga curta", "Body manga longa", "Body sem manga", o mesmo para Blusa e Vestido, e "Pijama manga curta" / "Pijama manga longa". Peças cuja manga não está confirmada ficam só com "Body", "Blusa", "Vestido" ou "Pijama" até a usuária dizer.
- **Estação** (calor, meia estação, frio) é um campo da peça, não categoria.

## Revisão de fotos (página privada no claude.ai)

- Página: https://claude.ai/artifact/Fh6duJeKMsEYtEmQbdmdLg (fonte em `artifact/revisao-fotos.html`; republicar sempre pelo mesmo caminho).
- Cada escolha da usuária é salva sozinha no banco da página. Ler com a ferramenta `ArtifactData` nesse link:
  - `fotos/<arquivo>`: `url` da miniatura (asset), `candidate_match`, `candidate_id`.
  - `catalogo/<id>`: `nome`, `categoria`, `tamanho`, `marca`.
  - `decisoes/<arquivo>`: `status` (`ja-cadastrada`, `nova`, `repetida`, `duvida`, `excluida` = não cadastrar, `a-conferir`), `match`, `nome`, `categoria`, `tamanho`, `marca`, `estacao`, `serve`, `igual_a`, `notes`, `rotacao` (graus, sentido horário).
- Quando a usuária pedir para atualizar, ler `decisoes`, mostrar o resumo e só então aplicar no catálogo.
- O site antigo no GitHub Pages (`revisao.html` + `dados/decisoes.json`) ficou como histórico; não é mais o lugar de revisar.
