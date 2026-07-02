const { join } = require("path");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const allTypes = loadFilesSync(join(__dirname, "modules", "**", "*.gql"), {
  extensios: ["graphql"],
});

const allResolvers = loadFilesSync(
  join(__dirname, "modules", "**", "resolver.js"),
  { extensios: ["graphql"] },
);

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };
