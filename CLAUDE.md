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
- Categoria "Moletom" não existe: moletons entram como **Casaco**.
- Manga (sem, curta, longa) e Estação (calor, meia estação, frio) são **campos** da peça, não categorias.

## Dados da revisão de fotos

- As respostas da usuária ficam no navegador dela; só chegam ao Claude por exportação JSON.
- `dados/decisoes.json` guarda as decisões já recebidas e é carregado pela página em qualquer aparelho. Ao receber uma exportação nova, mesclar nele (aplicando as correções combinadas em conversa) e publicar.
