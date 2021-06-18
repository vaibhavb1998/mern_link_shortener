// packages
const express = require("express");

// express router
const routes = express.Router();

const validate = require("./validator.js");

// express validation
const {
  generateShortUrlValidation,
  redirectUrlValidation,
} = require("./validation");

// controller
const { generateShortUrl, redirectToUrl } = require("./controller");

// @route POST api/url/generate
// @desc generate the short url
routes
  .route("/generate")
  .post(generateShortUrlValidation, validate, generateShortUrl);

// @route POST api/url/generate
// @desc generate the short url
routes
  .route("/redirect/:name")
  .get(redirectUrlValidation, validate, redirectToUrl);

module.exports = routes;
