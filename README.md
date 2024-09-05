

# Node.js Completo: Guia Prático

Este repositório contém todos os resumos e códigos práticos do curso de Node.js que concluí. O curso abrange todos os conceitos essenciais e avançados de Node.js, desde o básico até a construção de APIs RESTful e integração com banco de dados.

---

## Índice

1. [Introdução ao Node.js](#introdução-ao-nodejs)
2. [Módulos e NPM](#módulos-e-npm)
3. [Gerenciamento de Arquivos](#gerenciamento-de-arquivos)
4. [EventEmitter e Streams](#eventemitter-e-streams)
5. [Express.js](#expressjs)
6. [APIs RESTful](#apis-restful)
7. [Banco de Dados com MongoDB](#banco-de-dados-com-mongodb)
8. [Autenticação e Autorização](#autenticação-e-autorização)
9. [Testes e Debugging](#testes-e-debugging)
10. [Deploy](#deploy)
11. [Conclusão](#conclusão)

---

## Introdução ao Node.js

- **O que é Node.js?**
  - Node.js é um runtime JavaScript que permite a execução de código JavaScript fora do navegador, utilizando o V8 engine do Google Chrome.
  - Principais características: não bloqueante, orientado a eventos e leve.
  
- **Por que usar Node.js?**
  - Adequado para aplicações em tempo real, como chats, APIs, streaming de dados, etc.

---

## Módulos e NPM

- **Módulos em Node.js**:
  - Built-in (ex: `fs`, `http`, `path`).
  - Módulos de terceiros (ex: `express`, `mongoose`).
  - Criação de módulos customizados.

- **NPM (Node Package Manager)**:
  - Gerenciador de pacotes do Node.js.
  - Comandos principais: `npm init`, `npm install`, `npm run`, `npm update`.

---

## Gerenciamento de Arquivos

- **File System (fs)**:
  - Leitura e escrita de arquivos.
  - Manipulação de diretórios.
  - Métodos assíncronos (`fs.readFile`, `fs.writeFile`) e síncronos (`fs.readFileSync`, `fs.writeFileSync`).

---

## EventEmitter e Streams

- **EventEmitter**:
  - Classe central em Node.js para trabalhar com eventos.
  - Criação de eventos customizados e escuta de eventos.

- **Streams**:
  - Trabalhar com grandes quantidades de dados em partes menores.
  - Tipos: `Readable`, `Writable`, `Duplex`, `Transform`.

---

## Express.js

- **O que é Express.js?**
  - Framework minimalista para construção de APIs e servidores web com Node.js.

- **Conceitos Principais**:
  - Rotas, Middlewares, Controle de Erros.

---

## APIs RESTful

- **Criação de APIs RESTful**:
  - Métodos HTTP: GET, POST, PUT, DELETE.
  - Estrutura de uma API RESTful: Endpoints, Requisições, Respostas.

- **Ferramentas**:
  - Postman para testar APIs.
  - `express`, `body-parser`, `cors` para desenvolvimento.

---

## Banco de Dados com MongoDB

- **Conectando MongoDB com Node.js**:
  - Utilizando `mongoose` para modelagem de dados.
  - Operações CRUD: criação, leitura, atualização e exclusão de dados.
  
- **Modelos e Esquemas**:
  - Definição de schemas e criação de modelos para representar coleções no MongoDB.

---

## Autenticação e Autorização

- **Autenticação com JWT**:
  - Implementação de autenticação baseada em token.
  - Uso de `jsonwebtoken` para geração e verificação de tokens.

- **Protegendo rotas**:
  - Middleware de autorização para proteger endpoints.

---

## Testes e Debugging

- **Testes Automatizados**:
  - Introdução ao `Mocha` e `Chai` para testes unitários.
  - Testando APIs com `supertest`.

- **Debugging**:
  - Ferramentas de debugging como `node --inspect`, Visual Studio Code Debugger.

---

## Deploy

- **Deploy na Heroku**:
  - Configurando uma aplicação Node.js para deploy na Heroku.
  - Gerenciamento de variáveis de ambiente com `dotenv`.

- **Docker**:
  - Containerização de aplicações Node.js usando Docker.

---

## Conclusão

Este curso forneceu uma compreensão sólida de como desenvolver aplicações completas com Node.js, desde o uso de módulos nativos até a construção de APIs RESTful e integração com banco de dados. O conhecimento adquirido aqui é aplicável para construir aplicações escaláveis e eficientes.

---

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)


