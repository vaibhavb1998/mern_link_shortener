// packages
const httpStatus = require("http-status");
const isEmpty = require("lodash/isEmpty");

// model
const Url = require("../../models/urls");

exports.generateShortUrl = async (req, res, next) => {
  try {
    const {
      body: { name, url },
    } = req;

    const newUrl = new Url({
      name,
      url,
    });

    await newUrl.save();

    return res
      .status(httpStatus.OK)
      .json({ message: "Short url generated successfully!!!" });
  } catch (err) {
    return next(err);
  }
};

exports.redirectToUrl = async (req, res, next) => {
  try {
    const {
      params: { name },
    } = req;

    const data = await Url.findOne({ name });

    if (isEmpty(data)) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "Not found" });
    }

    const { url } = data;

    return res.redirect(url);
  } catch (err) {
    return next(err);
  }
};
