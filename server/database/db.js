// constants
const {
  mongo: { uri },
} = require("../config");

module.exports = {
  db: uri || "mongodb://localhost:27017/MERNLinkShortener",
};
