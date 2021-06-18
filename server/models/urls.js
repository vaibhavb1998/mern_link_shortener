// packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const UrlSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  url:{
    type: String,
    require: true,
  }
});

module.exports = Url = mongoose.model("url", UrlSchema);
