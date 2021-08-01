const configs = {
  development: {
    SERVER_URI: "localhost:3000",
  },
  production: {
    SERVER_URI: "HEROKU_URI",
  },
};

module.exports.config = configs[process.env.NODE_ENV];
