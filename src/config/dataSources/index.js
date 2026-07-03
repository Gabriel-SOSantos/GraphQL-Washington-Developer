const GitHubService = require("../../services/GitHub.service");
const TasksRegisterService = require("../../services/TasksRegister.service");
const UserRegisterService = require("../../services/UserRegister.service");

module.exports = () => ({
  gitHubService: GitHubService,
  userRegisterService: UserRegisterService,
  tasksRegisterService: TasksRegisterService,
});
