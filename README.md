﻿<h1 align="center" style="font-weight: bold;">Restaurant API 💻</h1>

<p align="center">
 <a href="#sobre">Descrição do Projeto</a> •
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#endpoints">API Endpoints</a> •
 <a href="#anotacoes">Anotações</a>
</p>

<h2 id="sobre">❔Sobre o projeto</h2>
<p>API completa para gerenciar serviços de um restaurante, desde a abertura de uma mesa até a conta final dos pedidos que foram feitos.</p>

<h2 id="tecnologias">🚀 Tecnologias</h2>
<ul>
  <li>TypeScript</li>
  <li>NodeJS</li>
  <li>Knex</li>
  <li>Zod</li>
  <li>Sqlite3</li>
</ul>

<h2 id="endpoints">📍API EndPoints</h2>
<p>Os endpoints da API podem ser testados usando o arquivo `request_insomnia.json`.</p>
<p>
Tem um arquivo `request_insomnia.json` que é um export do Insomnia contendo os testes da API.   
 Esse arquivo pode ser importado no Insomnia para facilitar a execução e verificação dos endpoints da API.

Optei por fornecer esse arquivo porque tem muitos endpoints na API, e incluir exemplos de todos eles no README ficaria muito extenso e dificultaria a leitura e manutenção da documentação</p>

<h2 id="anotacoes">📝 Anotações</h2>

### Tabelas no Banco de Dados
<ul>
  <li>Produtos: Armazena informações sobre os produtos.</li>
  <li>Mesas (Tables): Armazena informações sobre as mesas.</li>
  <li>Sessões de Mesas (Tables Sessions): Controla o estado de uma mesa.</li>
  <li>Pedidos (Orders): Armazena informações sobre os pedidos.</li>
</ul>

### Requisição HTTP
O servidor Express é iniciado no arquivo `server.ts` e escuta na porta 3333.    
As rotas são definidas no arquivo `index.ts`.   
Dentro da pasta routes, possui as rotas separadas de mesas, pedidos e produtos.

### Controladores
<p>Os controladores utilizam o Knex para interagir com o banco de dados e o Zod para validar e parsear os dados da requisição.</p>

### Tratamento de Erros
<p>O middleware de tratamento de erros está definido no arquivo `error-handling.ts` e captura erros do tipo `AppError` e `ZodError`, retornando respostas apropriadas.</p>

### Fluxo de Dados
1. **Requisição**: O cliente faz uma requisição HTTP para um endpoint específico.
2. **Roteamento**: A requisição é roteada pelo Express para o método correspondente no controlador.
3. **Validação e Parsing**: O controlador valida e parseia os dados da requisição usando o Zod.
4. **Interação com o Banco de Dados**: O controlador realiza a operação necessária no banco de dados usando o Knex.
5. **Resposta**: O controlador retorna uma resposta JSON apropriada.
6. **Tratamento de Erros**: Se ocorrer um erro, ele é passado para o middleware de tratamento de erros.
