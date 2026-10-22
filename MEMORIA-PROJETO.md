# Memória do projeto — Guarda Roupa Liv

**Última atualização:** 22/10/2026  
**Objetivo:** manter decisões, aprendizados técnicos e próximos passos para que o trabalho continue entre conversas sem perder contexto.

## 1. Repositório e acesso

- Repositório GitHub: https://github.com/VivianVB/guarda-roupa-liv
- Branch principal usada: `main`.
- Página de conferência publicada / endereço de acesso informado pela usuária:
  https://vivianvb.github.io/guarda-roupa-liv/conferir-pecas.html
- Arquivo da página no GitHub:
  https://github.com/VivianVB/guarda-roupa-liv/blob/main/conferir-pecas.html
- Catálogo HTML de referência: `guarda-roupa-liv-index-atualizado.html`.
- Usar o endereço do GitHub Pages para abrir a página como site. A URL `github.com/.../blob/main/...` é a visualização do arquivo no repositório, não a página executável.

## 2. Acesso ao GitHub e segurança

- O conector do GitHub foi capaz de **criar, ler e excluir** um arquivo de teste no repositório; portanto, a escrita foi confirmada durante a sessão de 22/10/2026.
- O arquivo de teste foi removido e a exclusão foi confirmada por resposta 404. Não deve permanecer no projeto.
- Não é necessário criar nem compartilhar tokens pessoais para repetir esse teste quando o conector conectado já tiver permissão de escrita.
- Antes de editar arquivos existentes, ler a versão atual e usar o SHA atual do arquivo; evitar alterações concorrentes no mesmo caminho.

## 3. Página de conferência

Arquivo: `conferir-pecas.html`

Commit de criação registrado: `2d51730633be7929ada36960e9b8b77561433856`.

A página foi criada para facilitar a conferência manual de itens catalogados. Ela inclui:
- opções de resposta: **Corresponde**, **Não corresponde** e **Tenho dúvida**;
- campo de observações por item;
- gravação das respostas no `localStorage` do navegador;
- botão para exportar as respostas em JSON, com nome de arquivo `respostas-conferencia-liv.json`.

### Limites importantes do funcionamento atual

- As respostas ficam no armazenamento local do navegador/dispositivo em que a pessoa usa a página; **não são sincronizadas automaticamente com o GitHub nem enviadas para o ChatGPT**.
- Para compartilhar o resultado, exportar o JSON e anexar/enviar o arquivo na conversa.
- As fotos originais das peças ainda não foram incorporadas a esta página. Até que sejam adicionadas, a conferência é baseada em nomes e descrições, não em comparação visual.
- O arquivo foi commitado no repositório e a usuária informou o endereço do GitHub Pages acima como o endereço correto para abrir o site. Em uma nova sessão, se houver problema de acesso, testar esse endereço e verificar as configurações de Pages no GitHub.

## 4. Itens colocados na primeira versão da conferência

**Atenção:** esta é a lista usada na versão inicial da página e ainda precisa ser conferida com as fotos e com a lista exata previamente combinada. Não assumir que os dez itens são a correspondência final correta.

1. `body-carters-rosa` — Body rosa com babado e borboleta; Carter’s; tamanho 18 meses.
2. `body-carters-verde` — Body verde com bolinhas; Carter’s; tamanho 18 meses.
3. `body-menta-bebe-papai` — Body verde-menta Bebê do Papai; tamanho 9–12 meses.
4. `short-preto-fadinhas` — Short preto estampado com fadinhas.
5. `pijama-lilas-branco` — Conjunto de pijama lilás e branco.
6. `body-branco-floral-azul` — Body branco floral azul; tamanho 12 meses.
7. `blusa-preta-lindika` — Blusa preta de manga longa; marca Lindika.
8. `vestido-branco-sereias` — Vestido branco com estampa de sereias.
9. `body-rosa-love-to-smile` — Body rosa “Love to Smile”.
10. `jardineira-jeans-azul` — Jardineira jeans azul.

## 5. Correções de classificação já conhecidas

No catálogo de roupas da Liv:
- O body rosa com babado e borboleta é de **manga curta**, não sem manga.
- O body verde com bolinhas é de **manga curta**, não sem manga.
- O único body sem manga identificado até agora é o **verde-menta Bebê do Papai**, do conjunto tamanho 9–12 meses, que serve na Liv.

Os dois primeiros bodies citados são Carter’s tamanho 18 meses.

## 6. Aprendizados sobre o catálogo atual

- O catálogo HTML existente é essencialmente estático e usa `localStorage` para guardar dados locais, inclusive informações/fotos adicionadas pelo navegador.
- Dados guardados apenas no navegador não ficam automaticamente disponíveis em outro dispositivo ou para quem abre o site. Para uma colaboração confiável, precisamos definir como exportar/importar dados ou implementar uma camada de persistência compartilhada.
- Não afirmar que as fotos originais estão no repositório ou na página de conferência sem verificar os arquivos atuais.
- Preservar o catálogo original ao desenvolver ferramentas auxiliares; a página `conferir-pecas.html` é uma ferramenta de conferência separada.

## 7. Fluxo recomendado para a próxima rodada

1. Abrir https://vivianvb.github.io/guarda-roupa-liv/conferir-pecas.html.
2. Marcar uma resposta de teste e adicionar uma observação.
3. Atualizar a página para verificar se as escolhas persistem no mesmo navegador.
4. Usar a exportação JSON e verificar se o arquivo é baixado.
5. Se o teste funcionar, enviar o JSON na conversa para revisar as respostas.
6. Depois, recuperar/verificar a lista exata de itens e associar as fotos originais antes de confiar nas correspondências visuais.
7. Só então ajustar IDs, descrições ou classificações no catálogo principal, evitando alterações com base em correspondências ainda não confirmadas.

## 8. Princípio do projeto

**Não presumir que uma peça corresponde apenas porque o nome ou a descrição parece semelhante.** Quando faltarem as fotos originais ou houver dúvida, manter o item como pendente e permitir que a usuária confirme ou rejeite a correspondência.
