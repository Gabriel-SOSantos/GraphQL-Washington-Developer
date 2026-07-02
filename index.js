const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const GitHubService = require("./src/services/GitHub.service");
const UserRegisterService = require("./src/services/UserRegister.service");
const TasksRegisterService = require("./src/services/TasksRegister.service");

const server = new ApolloServer({
  ...graphql,
  dataSources: () => ({
    gitHubService: GitHubService,
    userRegisterService: UserRegisterService,
    tasksRegisterService: TasksRegisterService,
  }),
});

server.listen().then(({ url }) => console.log(url));
