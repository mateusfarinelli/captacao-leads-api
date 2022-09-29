# Desafio Técnico - API de Captação de Leads SmtarEnvios

- Esse desafio consistia em receber informações de um front-end e persistir os dados em um banco de dados (SQL ou NoSQL).
- O fluxo de informações consistia no recimento da intenção (intention) de frete, contendo o "zipcode_start" e o "zipcode_end" e persistir esses dados no banco.
- Posteriormente a API receberia as informações nome e email do lead, e despararia um e-mail agradecendo a intenção da utilização da plataforma.
- E por fim a entidade "intention" teria o campo "lead_id" alterado após o cadastro.

## Técnologias
 * Para esse desafio utilizei:
   - TypeScript
   - Express
   - PostgreSQL
   - TypeORM
   - TSyringe
   - Jest

## Como rodar o projeto

- Primeiramente certifique-se que Node.js e o PostgreSQL estejam instalados na sua máquina.
- Crie o banco "captacao_leads" no seu DB, ou caso queira dar outro nome ao banco lembre-se de alterar a info conforme descrito na próxima linha.
- No arquivo "src/infra/database/index.ts" altere as propriedades necessárias para rodar o banco.
- Rode o comando "npm install" na raiz do projeto.
- Execute o comando "npm run migration:run" para que as tabelas sejam criadas no DB.
- Execute o comando "npm run dev" para executar a API localmente.
- Execute o comando "npm run test" para rodar as suites de teste.