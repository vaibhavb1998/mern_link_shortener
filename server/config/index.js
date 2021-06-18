require("dotenv").config();

const config = {
  baseUrl: process.env.BASE_URL,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  backendPort: process.env.PORT,
};

module.exports = config;
