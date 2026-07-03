# API-Git-Tasks

## Descrição

O objetivo do sistema é poder gerenciar tarefas com uma autenticação via [API do Github](https://api.github.com), a idéia é ser autenticado com base no seu nome na plataforma, e com isso criar tarefas vinculadas ao usuário cadastrado.
O sistema também permite que as tarefas sejam editadas, excluídas e atualizadas!

## Funcionalidades

### Usuários

- Os usuários são vinculados com base no Nick do github, além de acompanhar um ID incrementado e o link da foto de avatar.
- O usuário sera autenticado via Json Web Token, passado ele, todas as criadas serão vinculadas à ele.
- Um usuário não pode criar, alterar, deletar ou ver as tarefas de outro usuário.

### Tarefas

- As tarefas podem ser criadas com nome, descrição. Tendo ID incrementado
- As tarefas são vinculadas a apenas um usuário
- O usuário vinculado a esta tarefa pode gerenciar-la como bem entender

## Tecnologias Utilizadas:

O projeto foi criado como base de estudos e aprendizado utilizando as tecnologias:

- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/docs)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/pt-br)
- [KnexJS](https://knexjs.org/)

# Projeto

O projeto todo foi desenvolvido com base no [curso de GraphQL](https://www.youtube.com/playlist?list=PLK5FPzMuRKlyeZYiJNA54j4lpfxHGlz0j) do youtuber e professor [Washington Developer](https://www.youtube.com/@WashingtonDeveloper).

## Importante:

Vale lembrar que o conteúdo desse repositório acompanha o curso até a aula 24 onde é encerrada a aula com o projeto de base sendo o API-Git-Tasks pois pretendo prosseguir montando um front-end ao projeto. E darei continuidade ao curso em outro repositório

## Conteúdo:

A maioria das aulas práticas foram separadas por branchs, da 13 até a 24, cada uma avançando conforme a aula.

## Conhecimentos Adquiridos:

- GraphQL com Apollo Server
- Query
- Mutation
- Resolver
- (obj, args, context e info)
- Autenticação via JWT
- Fragments e Aliases
- Variables e Directives
- Tratativa de dados
- Knex
