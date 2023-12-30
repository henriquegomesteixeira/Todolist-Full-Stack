# Todolist-Full-Stack

O projeto ToDoList é uma aplicação full-stack para gerenciamento de tarefas. Utiliza Node.js com Express para o backend, empregando MySQL como banco de dados para armazenamento e manipulação dos dados das tarefas. O frontend é desenvolvido em React, oferecendo uma interface interativa e intuitiva para os usuários gerenciarem suas listas de tarefas.

![image](https://github.com/henriquegomesteixeira/Todolist-Full-Stack/assets/115906489/6921b792-9527-45dc-8d69-5b171edd06f7)


## Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript para o servidor.
- **Express**: Framework web para Node.js, utilizado para gerenciar rotas e requisições HTTP.
- **MySQL**: Banco de dados relacional para armazenar as tarefas.
- **Mocha, Chai, Sinon**: Utilizados para testes unitários no backend.

### Frontend

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **SASS**: Pré-processador CSS utilizado para estilização.
- **API Requests**: Comunicação com o backend via chamadas HTTP para realizar operações CRUD.

## Descrição do Projeto

A aplicação ToDoList é uma plataforma que permite aos usuários criar, editar, visualizar e remover tarefas de maneira eficiente. A arquitetura full-stack possibilita a interação contínua entre o frontend e o backend, garantindo que as alterações feitas na interface do usuário sejam refletidas no armazenamento e vice-versa.

Os testes unitários são uma parte fundamental do desenvolvimento, garantindo a robustez e confiabilidade do sistema. Utilizando Mocha, Chai e Sinon no backend, a aplicação é testada em diferentes cenários para validar a correta manipulação das requisições, a integridade dos dados e a resposta adequada do servidor.

Os usuários podem facilmente adicionar novas tarefas, atualizar seus detalhes e remover aquelas já concluídas. A comunicação entre o frontend e o backend é realizada por meio de requisições HTTP, permitindo que as ações dos usuários sejam processadas e armazenadas de forma eficaz no banco de dados.

O projeto é altamente customizável, possibilitando a adição de novas funcionalidades, melhoria da interface e expansão da capacidade de armazenamento, conforme as necessidades evoluem.


# Back-end

Esta API permite o gerenciamento de uma lista de tarefas (TODO list). Ela foi desenvolvida utilizando Node.js com Express e se conecta a um banco de dados MySQL para realizar operações básicas de criação, leitura, atualização e exclusão de tarefas.

## Visão Geral

O objetivo desta aplicação é fornecer uma interface para que os usuários possam:

- Criar novas tarefas.
- Visualizar todas as tarefas existentes.
- Atualizar o status ou detalhes das tarefas.
- Remover tarefas existentes.

## Funcionalidades e Estrutura

### Funcionalidades Principais

- **Criação de Tarefas**: A rota `POST /tasks` permite a criação de novas tarefas, fornecendo um título e status inicial.
- **Listagem de Tarefas**: A rota `GET /tasks` retorna todas as tarefas existentes no banco de dados.
- **Atualização de Tarefas**: A rota `PUT /tasks/:id` possibilita a atualização de uma tarefa específica por meio do seu ID.
- **Remoção de Tarefas**: A rota `DELETE /tasks/:id` exclui uma tarefa com base no seu ID.

### Estrutura do Projeto

- `controllers/`: Contém funções de controle que lidam com as requisições HTTP e interagem com o banco de dados por meio dos modelos.
- `middlewares/`: Funções intermediárias para validar dados da requisição antes do processamento.
- `models/`: Funções para comunicação com o banco de dados MySQL.
- `router.js`: Define as rotas utilizando o Express Router para diferentes requisições HTTP.
- `app.js`: Ponto de entrada da aplicação, configura o servidor Express e seus middlewares.
- `connection.js`: Estabelece um pool de conexões com o banco de dados MySQL.

## Configuração e Uso Local
   
Instale as dependências:

  ```bash
  npm install
  ```

Defina as variáveis de ambiente:

- Crie um arquivo .env na raiz do projeto.
- Adicione as seguintes variáveis de ambiente:
```bash
MYSQL_HOST=seu_host_mysql
MYSQL_USER=seu_usuario_mysql
MYSQL_PASSWORD=sua_senha_mysql
MYSQL_DB=nome_do_banco_mysql
PORT=numero_da_porta_desejada
```

Inicie o servidor:

  ```bash
  npm start
  ```

- Uso da API
- Garanta que o servidor esteja rodando localmente.

## Testes Unitários

Os testes são escritos usando Node.js, Mocha como framework de teste, Chai para asserções e Sinon para criação de stubs e spies.

### Dependências

- **Node.js**: Ambiente de execução JavaScript.
- **Mocha**: Framework de teste.
- **Chai**: Biblioteca de asserções.
- **Sinon**: Biblioteca para stubs, spies e mocks.

### Executando os Testes:

  ```bash
  npm test
  ```

# Front-end

Este é um aplicativo de Lista de Tarefas construído com React que oferece uma interface intuitiva para gerenciar suas tarefas. A aplicação permite aos usuários adicionar, editar e remover tarefas de forma eficiente.

Ao se conectar com uma API de backend, este frontend possibilita a comunicação para armazenar, atualizar e excluir tarefas remotamente. Essa integração permite que os usuários tenham acesso instantâneo às suas listas de tarefas em tempo real.

## Funcionalidades

- **Visualizar Tarefas**: Exibe uma tabela com as tarefas existentes, mostrando título, data de criação e status.
- **Adicionar Tarefa**: Permite aos usuários adicionar uma nova tarefa à lista.
- **Editar Tarefa**: Oferece a capacidade de editar o título e status das tarefas existentes.
- **Deletar Tarefa**: Permite aos usuários remover tarefas da lista.

## Começando

### Pré-requisitos

- Node.js instalado
- API de Backend (localizada em `http://localhost:3333/tasks`) em execução para armazenar/recuperar tarefas

### Configuração e Uso Local

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie a aplicação React:

   ```bash
   npm start
   ```

3. Certifique-se de que a API de backend está em execução em `http://localhost:3333/tasks`.

4. Acesse o aplicativo em um navegador da web em `http://localhost:3000`.

### Estrutura de Arquivos

- **components/**
  - **Form.js**: Componente responsável por adicionar tarefas.
  - **Table.js**: Componente para exibir tarefas em formato de tabela.
  - **Greeting.js**: Componente para cumprimentar os usuários com base no horário do dia.
- **services/**
  - **tasksApi.js**: Arquivo de serviço para lidar com chamadas de API para tarefas.

### Estilização com SASS

Este projeto utiliza SASS (Syntactically Awesome Style Sheets) para estilização. Os arquivos SASS estão localizados na pasta `sass/`. Para compilar arquivos SASS em CSS, utilize um pré-processador SASS de sua escolha.

## Notas Adicionais

- O frontend assume uma API de backend localizada em `http://localhost:3333/tasks` para gerenciar as tarefas. Se sua URL de backend for diferente, certifique-se de atualizar `tasksApi.js`.
- Personalize o estilo e as funcionalidades de acordo com suas necessidades.


