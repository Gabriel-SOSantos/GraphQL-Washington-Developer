class UserNotExists extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.message = message;
    this.name = UserNotExists;
  }
}

module.exports = UserNotExists;
