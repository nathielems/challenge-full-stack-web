- Decisão da arquitetura utilizada
Decidi por fazer duas pastas para separar front e back e mantê-los em um mesmo repositório - por mais que não seja o usual. Para o back, utilizei uma estrutura simples dividindo a api em controllers, services e routes.
Comecei a utilizar o sequelize para gerar as tabelas, mas, devido ao tempo, opteu por retroceder e utilizar um script manual para gerar a tabela do banco de dados.
A documentação foi gerada em swagger.

Para o front
segui a estrutura sugerida pelo nuxt e dividi as pages entre script e o arquivo .vue. Os testes foram feitos em jest

- Lista de bibliotecas de terceiros utilizadas
para o backend
- "cors": "^2.8.5",
    "express": "^4.17.1",
    "pg": "^8.6.0",
    "pg-hstore": "^2.3.3"
     "nodemon": "^2.0.7",
    "dotenv": "^8.2.0"

para o frontend
"axios": "^0.21.1",
    "core-js": "^3.9.1",
    "nuxt": "^2.15.3",
    "sass": "^1.32.11"
    "@nuxtjs/eslint-module": "^3.0.2",
    "@nuxtjs/vuetify": "^1.11.3",
    "@vue/test-utils": "^1.1.3",
    "babel-core": "7.0.0-bridge.0",
    "babel-jest": "^26.6.3",
    "eslint": "^7.25.0",
    "eslint-plugin-vue": "^7.9.0",
    "jest": "^26.6.3",
    "vue-jest": "^3.0.4"

- O que você melhoraria se tivesse mais tempo
Faria a parte de authorization, com login e senha e níveis de usuários. Também refinaria o código, organizando melhor e incrementaria algumas funções no front, como a modal de sucesso no cadastro, delete e update, e também o campo de pesquina na tela de lista dos estudantes.

- Quais requisitos obrigatórios que não foram entregues
Acredito que fiz todos, inclusive os desejáveis.
