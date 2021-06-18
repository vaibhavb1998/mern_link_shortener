const { body, param } = require("express-validator");
const isEmpty = require("lodash/isEmpty");

// model
const Url = require("../../models/urls");

module.exports = {
  generateShortUrlValidation: [
    body("url")
      .notEmpty()
      .withMessage("Url is required")
      .bail()
      .isURL()
      .withMessage("Url is invalid")
      .bail(),
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .bail()
      .isLength({ min: 3, max: 10 })
      .withMessage(
        "Length of name should be at least 3 characters and upto 10 characters"
      )
      .bail()
      .isAlphanumeric()
      .withMessage("Name can only have alpha numeric characters")
      .bail()
      .custom(async (name) => {
        const data = await Url.findOne({ name });
        if (!isEmpty(data)) {
          throw new Error("Name already exists");
        }
      })
      .bail(),
  ],
  redirectUrlValidation: [
    param("name").notEmpty().withMessage("Name is required"),
  ],
};
