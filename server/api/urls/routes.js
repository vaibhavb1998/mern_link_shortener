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
const { generateShortUrl, redirectToUrl, generateRandomName } = require("./controller");

// @route POST api/url/generate
// @desc generate the short url
routes
  .route("/generate")
  .post(generateShortUrlValidation, validate, generateShortUrl);

// @route GET api/url/redirect/:name
// @desc get the url based on the name
routes
  .route("/redirect/:name")
  .get(redirectUrlValidation, validate, redirectToUrl);

// @route GET api/url/redirect/:name
// @desc get the url based on the name
routes
  .route("/generate/random/name")
  .get(generateRandomName);

module.exports = routes;
