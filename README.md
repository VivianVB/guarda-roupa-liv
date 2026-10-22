# Guarda-Roupa Digital da Liv

Catálogo das roupinhas da Liv: fotos, tamanhos, marcas e se cada peça ainda serve.

**Site:** https://vivianvb.github.io/guarda-roupa-liv/

## Páginas

| Página | Para que serve |
| --- | --- |
| [`index.html`](index.html) | Catálogo principal: cadastrar, editar, buscar e filtrar peças. |
| [`revisao.html`](revisao.html) | Revisar as 80 fotos originais e dizer a qual peça do catálogo cada uma corresponde. |
| [`conferir-pecas.html`](conferir-pecas.html) | Conferência rápida das 10 primeiras peças identificadas (sem fotos). |

## Estrutura

```
index.html            catálogo
revisao.html          revisão das fotos
conferir-pecas.html   conferência por texto
fotos/                80 fotos originais (nomes preservados)
fotos/inventario.json lista das fotos + sugestões provisórias de correspondência
PROJETO.md            contexto, regras, catálogo e próximos passos
```

## Limitação atual

Tudo o que se edita nas páginas fica salvo **só no navegador** em que foi feito (`localStorage`). Não sincroniza entre aparelhos. Para guardar ou compartilhar, use os botões de exportar (JSON/CSV).

## Publicação

O GitHub Pages publica a branch `main`, pasta raiz (**Settings → Pages → Deploy from a branch**). Ao adicionar fotos novas em `fotos/`, inclua também uma entrada em `fotos/inventario.json` para que apareçam na revisão.
