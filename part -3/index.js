const { gql, ApolloServer } = require("apollo-server");

const produto = [
  { id: 1, nome: "Notebook", valor: 12000, desconto: 1 },
  { id: 2, nome: "Mouse Logitech", valor: 400, desconto: 0 },
  { id: 3, nome: "Split Keyboard Corne v4", valor: 600, desconto: 2 },
];

const descontos = [
  { id: 0, desc: "Sem desconto" },
  { id: 1, desc: "10% de desconto" },
  { id: 2, desc: "20% de desconto" },
];

const typeDefs = gql`
  type Produto {
    id: ID
    nome: String
    valor: Float
    desconto: Desconto
  }

  type Desconto {
    id: Int
    desc: String
  }

  type Query {
    produto(id: Int): Produto
    descontos: [Desconto]
  }
`;

const resolvers = {
  Produto: {
    desconto(produto) {
      return descontos.find((d) => d.id === produto.desconto);
    },
  },

  Query: {
    produto(_, args) {
      return produto.find((p) => p.id === args.id);
    },
    descontos() {
      return descontos;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
