---
name: revisao-ux
description: Revisa a experiência de uso (UX) de uma tela do site do Guarda-Roupa da Liv — abre a prévia local com os dados reais, olha no celular e no computador, confere a lista de critérios e corrige. Use quando a usuária disser que algo ficou ruim, confuso ou difícil de usar, ou antes de publicar uma tela nova.
---

# Revisão de UX — Guarda-Roupa da Liv

A usuária usa o site principalmente **no celular**, com pressa, muitas vezes com uma mão. Toda tela deve ser rápida de entender e de tocar.

## Passo a passo

1. **Abrir a prévia local** (não precisa do claude.ai): rodar `node scripts/preview-server.js` em segundo plano e abrir `http://localhost:8787` no navegador. A prévia usa `dados/catalogo.json` e as fotos de `fotos/mini`; gravações não são salvas.
2. **Olhar no celular primeiro**: `resize_window` com preset `mobile`, screenshot da tela em questão (com o componente aberto/ativo). Depois no computador (preset `desktop`).
3. **Conferir os critérios abaixo**, anotando cada problema com o que se vê na tela.
4. **Propor a correção em uma frase por problema**; se mudar o comportamento (não só o visual), perguntar antes de aplicar (regra do `CLAUDE.md`).
5. **Corrigir, ver de novo** (um screenshot por tamanho) e só então publicar.

## Critérios

- **Toque:** alvos com pelo menos 40–44 px; nada que dependa de passar o mouse.
- **Celular primeiro:** nada estoura a largura; listas longas não abrem como caixas flutuantes que cobrem a tela; preferir faixas de chips roláveis ou uma folha que sobe de baixo.
- **Um passo:** a ação mais comum deve exigir um toque (ex.: filtrar "partes de cima" = 1 toque).
- **Estado visível:** o que está filtrado/selecionado aparece sem abrir nada; sempre há um jeito óbvio de limpar.
- **Consistência:** mesmos chips, botões e cores das outras telas (tokens do `:root`); nada de estilo novo sem motivo.
- **Texto:** português simples, rótulos curtos, sem jargão técnico; nomes das coisas como a usuária fala.
- **Hierarquia:** foto e nome da peça primeiro; controles secundários menores.
- **Tema escuro:** cores sempre pelos tokens; conferir contraste.
- **Feedback:** toda ação mostra resultado (contagem muda, "Salvando…", "Tudo salvo").

## Registro

Ao terminar, anotar no `CLAUDE.md` qualquer decisão de UX que deva valer para as próximas telas.
