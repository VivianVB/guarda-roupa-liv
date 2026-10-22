# Guarda-Roupa Digital da Liv — contexto do projeto

**Repositório:** https://github.com/VivianVB/guarda-roupa-liv  
**Site (GitHub Pages):** https://vivianvb.github.io/guarda-roupa-liv/  
**Branch principal:** `main`  
**Idioma:** português brasileiro.

## Objetivo

Manter um catálogo digital das roupas da Liv, com fotos, descrições, tamanhos, marcas e indicação se cada peça serve. A usuária quer conferir as correspondências entre fotos reais e peças já cadastradas diretamente no portal.

## Regras importantes

- Não excluir peças existentes nem alterar correspondências automaticamente sem confirmação.
- Não pedir à usuária para trabalhar localmente, editar código, extrair arquivos ou fazer tarefas técnicas desnecessárias.
- Quando uma ação manual for inevitável, explicar com passos simples e orientar visualmente.
- Distinguir claramente o que foi gravado no repositório do que já foi publicado no GitHub Pages.
- Não afirmar que o site está pronto antes de testar a publicação e a abertura das imagens.
- Preservar os nomes originais das fotos, sempre que possível.

## Estado técnico conhecido em 22/10/2026

- O repositório já contém `index.html` e uma página de revisão `revisao.html`.
- Foi adicionado ao `index.html` um acesso à página de revisão.
- A página `revisao.html` criada inicialmente depende de selecionar um ZIP para carregar as fotos; esse fluxo precisa ser removido.
- Ainda não foi confirmado que a publicação do GitHub Pages terminou.
- As 80 fotos originais não estavam hospedadas no repositório no momento desta atualização.
- Foi preparado para a usuária o arquivo `fotos-guarda-roupa-liv.zip`, contendo a pasta `fotos/` com 80 imagens JPG e um arquivo de instruções. A usuária pretende enviar os JPGs extraídos para o repositório pelo navegador do GitHub.
- Após o envio, confirmar que os arquivos estão no caminho `fotos/nome-da-imagem.jpg`, sem duplicação de pasta (`fotos/fotos/`).
- Em seguida, atualizar a página de revisão para carregar as imagens de `fotos/` automaticamente, testar o portal e verificar o status do Pages.

## Catálogo inicial — 23 peças

1. `body-carters-rosa` — Body rosa com babado e borboleta; Carter's; 18 meses; manga curta.
2. `body-carters-verde` — Body verde com bolinhas; Carter's; 18 meses; manga curta.
3. `body-menta-bebe-papai` — Body verde-menta Bebê do Papai; 9–12 meses; sem manga; parte de conjunto; registrado como servindo.
4. `short-preto-fadinhas` — Short preto estampado com fadinhas.
5. `pijama-lilas-branco` — Pijama lilás e branco; blusa de manga longa e calça.
6. `body-branco-floral-azul` — Body branco floral azul; 12 meses; manga longa.
7. `blusa-preta-lindika` — Blusa preta de manga longa; Lindika.
8. `vestido-branco-sereias` — Vestido branco com estampa de sereias; manga curta.
9. `body-rosa-love-to-smile` — Body rosa “Love to Smile”.
10. `jardineira-jeans-azul` — Jardineira jeans azul.
11. `conjunto-kyly-mostarda` — Conjunto Kyly com blusa e short mostarda; tamanho 2; confirmar se serve.
12. `short-jeans-tia-muri` — Short jeans; tamanho 1; Tia Muri; registrado como servindo.
13. `short-vermelho-somine` — Short vermelho franzidinho; tamanho 4; Somine; registrado como grande.
14. `body-branco-flores-lilas-verdes` — Body branco com florzinhas lilás e verdes; manga curta bufante.
15. `body-floral-rosa-verde` — Body floral rosa e verde; manga curta.
16. `body-branco-coracoes-marrons` — Body branco com corações marrons; manga curta.
17. `conjunto-termico` — Conjunto térmico; blusa de manga longa e calça cinza.
18. `calca-moletom-rosa-pink` — Calça de moletom rosa pink; cordão branco.
19. `casaco-aveludado-rosa-coelho` — Casaco aveludado rosa antigo; capuz e coelhinho.
20. `calca-moletom-verde-petroleo` — Calça de moletom verde-petróleo.
21. `blusa-moletom-capivara` — Blusa azul-clara com capivara; manga longa.
22. `poncho-croche-rosa-mesclado` — Poncho de crochê rosa e mesclado; pompons.
23. `vestido-vermelho-abelhinhas-kyly` — Vestido vermelho de abelhinhas; Kyly.

## Correspondências provisórias entre fotos e catálogo

Estas são hipóteses para revisar visualmente, não decisões finais:

- `1000217088.jpg` e `1000217091.jpg`: podem mostrar a mesma blusa verde-menta sem mangas, com tule/perolinhas nos ombros; não confundir com o body verde-menta já catalogado.
- `1000217089.jpg` e `1000217090.jpg`: possível duplicata de calça floral branca.
- `1000217093.jpg` e `1000217171.jpg`: possível mesma blusa preta de manga longa Lindika.
- `1000217163.jpg`: possível short preto de fadinhas.
- `1000217166.jpg`: possível body branco floral azul; confirmar.
- `1000217167.jpg`: possível body verde de bolinhas Carter's.
- `1000217172.jpg`: possível vestido branco de sereias.
- `1000217173.jpg`: possível body “Love to Smile”.
- `1000217176.jpg`: possível jardineira/peça jeans.
- `1000217187.jpg`: possível body floral rosa e verde; `1000217190.jpg` parece ser body bege com estampa animal, provavelmente outra peça.
- `1000217198.jpg`: possível conjunto térmico cinza.
- `1000217199.jpg`: possível calça de moletom rosa.
- `1000217204.jpg`: possível casaco rosa antigo com coelho.
- `1000217205.jpg`: possível calça verde-petróleo.
- `1000217206.jpg`: possível blusa de capivara.
- `1000217207.jpg`: possível poncho de crochê.
- `1000217221.jpg`: body listrado rosa e branco Carter's; comparar com o catálogo.
- `1000217223.jpg`: blusa branca sem mangas e short mostarda; possível conjunto Kyly.
- `1000217224.jpg`: short jeans azul-claro com flores rosa bordadas; possível short jeans Tia Muri.
- `1000217225.jpg`: body listrado azul e branco Carter's; comparar com o catálogo.

## Próximas etapas

1. Aguardar/confirmar o envio dos 80 JPGs pela usuária ao GitHub.
2. Verificar a estrutura da pasta `fotos/` na branch `main`.
3. Modificar `revisao.html` para ler imagens hospedadas no próprio site, sem seletor de ZIP.
4. Oferecer controles claros para associar foto a peça, marcar duplicatas e indicar “não corresponde”, mantendo as decisões revisáveis.
5. Preservar o catálogo atual e não aplicar alterações definitivas sem confirmação.
6. Testar os caminhos das imagens e confirmar que GitHub Pages publicou a versão atualizada.
