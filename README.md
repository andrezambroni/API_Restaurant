<h1 align="center" style="font-weight: bold;"> Restaurant API 💻</h1>

<p align="center">
 <a href="#sobre">Descrição do Projeto</a> •
 <a href="#tecnologias">Tecnologias</a> • 
  <a href="#endpoints">API Endpoints</a> •
 <a href="#anotacoes">Anotações</a>
</p>

<p align="border">
<h2 id="sobre">❔Sobre o projeto </h2>
- API para gerenciar pedidos das mesas de um restaurante </br>
- Para treinamento das tecnologias usadas e desenvolvimento pessoal </br>
</p>


<h2 id="tecnologias">🚀 Tecnologias</h2>

- TypeScript
- NodeJS
- Knex
- Zod
- Sqlite3

## Versões

```json
 "dependencies": {
    "api_restaurant": "file:",
    "express": "^4.19.2",
    "knex": "^3.1.0",
    "sqlite3": "^5.1.7",
    "ts-node": "^10.9.2",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.14.12",
    "tsx": "^4.16.2",
    "typescript": "^5.5.4"
  }
```

<h2 id="endpoints"> 📍API EndPoints </h2>

### Listar Todos os Produtos

- **URL**: `/`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de todos os produtos.
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**: Uma lista de objetos de produtos.

### Criar um Novo Produto

- **URL**: `/`
- **Método**: `POST`
- **Descrição**: Cria um novo produto.
- **Corpo da Requisição**:
  - **Formato**: JSON
  - **Exemplo**:
    ```json
    {
      "nome": "Nome do Produto",
      "preco": 19.99,
      "descricao": "Descrição do Produto"
    }
    ```
- **Resposta de Sucesso**:
  - **Código**: `201 Created`
  - **Conteúdo**: O objeto do produto criado.

### Atualizar um Produto Existente

- **URL**: `/:id`
- **Método**: `PUT`
- **Descrição**: Atualiza um produto existente identificado pelo `id`.
- **Parâmetros de URL**:
  - `id` (string): O ID do produto a ser atualizado.
- **Corpo da Requisição**:
  - **Formato**: JSON
  - **Exemplo**:
    ```json
    {
      "nome": "Nome Atualizado do Produto",
      "preco": 29.99,
      "descricao": "Descrição Atualizada do Produto"
    }
    ```
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**: O objeto do produto atualizado.   


<h2 id="anotacoes"> 📝 Anotações</h2>

### Requisição HTTP:

O servidor Express é iniciado no arquivo server.ts.   
O servidor escuta na porta 3333 e usa o middleware express.json() para parsear o corpo das requisições como JSON.   
As rotas são definidas no arquivo index.ts e são usadas pelo servidor.   

### Definição de Rotas:
As rotas específicas para produtos são definidas no arquivo products-routes.ts       
As rotas mapeiam os endpoints para os métodos do controlador ProductsController   

### Controlador de Produtos:

O controlador ProductsController está definido no arquivo products-controller.ts   
Ele possui métodos para listar (index), criar (create) e atualizar (update) produtos.   
Cada método do controlador utiliza o knex para interagir com o banco de dados e o zod para validar e parsear os dados da requisição.   

### Validação e Parsing:

No método update, por exemplo, o ID do produto é validado e convertido para número usando o zod.   
O corpo da requisição é validado para garantir que o nome tenha pelo menos 6 caracteres e o preço seja maior que 0.   

### Interação com o Banco de Dados:

O knex é configurado no arquivo knex.ts   
As operações de banco de dados, como seleção, inserção e atualização, são realizadas usando o knex no controlador.   

### Tratamento de Erros:

O middleware de tratamento de erros está definido no arquivo error-handling.ts   
Ele captura erros do tipo AppError e ZodError e retorna respostas apropriadas   
Outros erros são tratados como erros internos do servidor (500)   

## Fluxo de Dados
Requisição:   

O cliente faz uma requisição HTTP para um endpoint específico (por exemplo, PUT /products/:id).   

Roteamento:   
A requisição é roteada pelo Express para o método correspondente no controlador ProductsController.

Validação e Parsing:   
O controlador valida e parseia os dados da requisição usando o zod.

Interação com o Banco de Dados:   
O controlador realiza a operação necessária no banco de dados usando o knex.  

Resposta:
O controlador retorna uma resposta JSON apropriada.   

Tratamento de Erros:   
Se ocorrer um erro, ele é passado para o middleware de tratamento de erros, que retorna uma resposta de erro apropriada.