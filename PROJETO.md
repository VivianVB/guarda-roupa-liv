# Guarda-Roupa Digital da Liv — contexto do projeto

**Repositório:** https://github.com/VivianVB/guarda-roupa-liv  
**Site:** https://vivianvb.github.io/guarda-roupa-liv/  
**Branch:** `main` · **Idioma:** português brasileiro  
**Última atualização:** 22/10/2026

Este arquivo substitui `MEMORIA-PROJETO.md` e `PROJETO-GUARDA-ROUPA-LIV.md`, que foram unificados aqui.

## Objetivo

Manter um catálogo digital das roupas da Liv, com fotos, descrições, tamanhos, marcas e indicação se cada peça serve, e permitir conferir no próprio site as correspondências entre as fotos reais e as peças cadastradas.

## Regras do projeto

- **Não presumir que uma peça corresponde só porque o nome ou a descrição parece semelhante.** Na dúvida, manter como pendente e deixar a confirmação para a usuária.
- Não excluir peças nem alterar correspondências sem confirmação.
- Preservar os nomes originais das fotos.
- Preservar o catálogo principal ao criar ferramentas auxiliares.
- Evitar pedir tarefas técnicas à usuária; quando inevitável, explicar com passos simples.
- Distinguir o que foi gravado no repositório do que já está publicado no GitHub Pages, e não dizer que o site está pronto sem testar.

## Estado técnico

- `index.html` — catálogo com 23 peças iniciais; cadastro/edição/exclusão, busca e filtros; foto enviada pelo navegador. Dados em `localStorage` (`guardaRoupaLiv.v1`).
- `revisao.html` — carrega as fotos de `fotos/` usando `fotos/inventario.json` (não precisa mais de ZIP). Para cada foto: decisão (já cadastrada / nova / repetida / dúvida), peça correspondente e observações. Exporta JSON e CSV. Dados em `localStorage` (`guardaRoupaLiv.correspondencias.v1`).
- `conferir-pecas.html` — conferência por texto das 10 primeiras peças; exporta `respostas-conferencia-liv.json`. Dados em `localStorage` (`guardaRoupaLiv.conferencia.v1`).
- `fotos/` — 80 fotos JPG originais.
- Nada é sincronizado entre aparelhos; para compartilhar resultados, exportar o arquivo.

## Correções de classificação confirmadas

- Body rosa com babado e borboleta (Carter's, 18 meses): **manga curta**.
- Body verde com bolinhas (Carter's, 18 meses): **manga curta**.
- O único body sem manga identificado até agora é o **verde-menta Bebê do Papai** (conjunto 9–12 meses), que serve na Liv.

## Decisões da revisão de fotos confirmadas em conversa

- `1000217092.jpg` (calça térmica cinza) faz parte do `conjunto-termico` — vincular a ele, não cadastrar como peça nova (24/10/2026).
- `1000217099.jpg` (moletom coelhinho) é outra peça, diferente de `casaco-aveludado-rosa-coelho` — cadastrar como nova, categoria Casaco (24/10/2026).
- Categoria "Moletom" não é usada; moletons entram como Casaco.
- Fotos marcadas como "Foto repetida" são **descartadas** no catálogo: cada peça fica com uma foto só, a que foi marcada como nova ou vinculada. Os arquivos continuam em `fotos/` (24/10/2026).

## Catálogo inicial — 23 peças

1. `body-carters-rosa` — Body rosa com babado e borboleta; Carter's; 18 meses; manga curta.
2. `body-carters-verde` — Body verde com bolinhas; Carter's; 18 meses; manga curta.
3. `body-menta-bebe-papai` — Body verde-menta Bebê do Papai; 9–12 meses; sem manga; parte de conjunto; serve.
4. `short-preto-fadinhas` — Short preto estampado com fadinhas.
5. `pijama-lilas-branco` — Pijama lilás e branco; blusa de manga longa e calça.
6. `body-branco-floral-azul` — Body branco floral azul; 12 meses; manga longa.
7. `blusa-preta-lindika` — Blusa preta de manga longa; Lindika.
8. `vestido-branco-sereias` — Vestido branco com estampa de sereias; manga curta.
9. `body-rosa-love-to-smile` — Body rosa “Love to Smile”.
10. `jardineira-jeans-azul` — Jardineira jeans azul.
11. `conjunto-kyly-mostarda` — Conjunto Kyly com blusa e short mostarda; tamanho 2; confirmar se serve.
12. `short-jeans-tia-muri` — Short jeans; tamanho 1; Tia Muri; serve.
13. `short-vermelho-somine` — Short vermelho franzidinho; tamanho 4; Somine; grande.
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

## Correspondências provisórias

As sugestões de correspondência entre fotos e peças (hipóteses, **não decisões**) estão em `fotos/inventario.json`, no campo `candidate_match`, e aparecem como “Sugestão inicial” na página de revisão. 24 das 80 fotos têm sugestão; as demais ainda não foram analisadas.

## Próximos passos

1. Completar as peças da aba **Conferência** no site principal (marca, tamanho, avisos, refotografar).
2. Conversar a estrutura das páginas de **compras** e **looks** (Etapas 3 e 4).

## Etapas do projeto

Objetivo principal: catalogar o guarda-roupa da Liv, podendo adicionar peças e dar baixa nelas. As etapas seguintes dependem de um catálogo confiável.

| Etapa | O que entrega | Situação |
| --- | --- | --- |
| 1. Catálogo | Revisão das fotos (concluída em 25/10/2026), site principal com catálogo, conferência e **baixa** de peças sem apagar o histórico. Cópia aberta em `dados/catalogo.json`. | Em andamento: site principal provisório no claude.ai |
| 2. Site próprio, sem depender do Claude | Hoje o site principal é uma página privada no claude.ai, que só abre com o login do Claude. A usuária não quer essa dependência. Plano: banco próprio com login (ex.: Supabase, plano gratuito) + site/PWA próprio; migrar a partir de `dados/catalogo.json` e das fotos em `fotos/`. Depois disso, o repositório pode ficar privado. | Planejada |
| 3. Looks com IA | Peças marcadas com cor, estação e ocasião; a IA sugere combinações a partir das fotos. | Planejada |
| 4. Lista de compras inteligente | Cruzar tamanho atual, crescimento da Liv, estação e lacunas por categoria para sugerir o que comprar. | Planejada |
| 5. App | Primeiro um app instalável pelo navegador (PWA); depois, se fizer sentido, app nativo. | Planejada |

### Estrutura combinada para compras e looks (25/10/2026)

- **Cidade:** Campo Grande (MS). Calendário proposto: calor de outubro a março, meia estação em abril, maio e setembro, frio de junho a agosto (inverno curto, com frentes frias fortes).
- **Perfil da criança:** nome, data de nascimento, sexo, cidade e medidas com data (altura/comprimento total, peso, cintura, comprimento do pé; tórax opcional). Base para prever mudança de tamanho.
- **Ordem:** perfil → página de compras por regras (quantidade mínima, tamanho, estação; sem IA) → pesquisa de quantidades e tabelas das marcas → looks com IA (skill que olha as fotos).
- **Opção futura (não agora): agente agendado** que confere periodicamente a previsão do tempo de Campo Grande e atualiza a lista de compras / avisa de frente fria chegando. A usuária quer, mas para depois.

### Decisão sobre privacidade (22/10/2026)

O repositório continua **público** por enquanto. No plano gratuito do GitHub, repositório privado não publica no GitHub Pages, e mesmo no plano pago o site do Pages fica aberto a quem tiver o link. A privacidade real vem com a Etapa 2 (login).
