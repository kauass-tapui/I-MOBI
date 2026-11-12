# I-MOBI padronizado

## Principais alterações

- Criação de `dashboard.css`, a base visual compartilhada dos painéis de administrador, proprietário e corretor. Ela reutiliza os tokens de cor, borda, espaçamento e sombra da referência administrativa.
- Correção definitiva do texto indevido `html` no painel administrativo: as cercas de Markdown que estavam dentro de `adm.html` foram removidas da origem do documento.
- Reorganização dos painéis por perfil:
  - `adm.html`: gestão de imóveis, usuários, corretores, relatórios e atividades do sistema.
  - `proprietario.html`: imóveis próprios, visitas, contratos e financeiro dos imóveis do proprietário.
  - `corretor.html`: carteira de imóveis, clientes, agenda, mensagens e resultados do corretor.
- Remoção de `planos.html` e `planos.css`, além de todos os links, cards e chamadas de planos no site.
- Inclusão de `modelo-cobranca.html`, que explica o novo modelo por negociação sem estipular valores ou porcentagens.
- Preservação das páginas de busca, imóveis, favoritos, visitas, mensagens, perfil e suporte já existentes.

## Como abrir

Abra `index.html` para a página institucional, ou use `login.html` com os sufixos de e-mail já previstos no projeto:

- `@adm` para `adm.html`
- `@proprietario` para `proprietario.html`
- `@corretor` para `corretor.html`
- `@cliente` para a área do cliente
