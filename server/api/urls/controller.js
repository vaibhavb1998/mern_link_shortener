// packages
const httpStatus = require("http-status");
const { isEmpty, times, random } = require("lodash");

// model
const Url = require("../../models/urls");

exports.generateShortUrl = async (req, res, next) => {
  try {
    const {
      body: { name = "", url },
    } = req;

    let randomName = "";

    if (!name) {
      while (true) {
        randomName = times(3, () => random(35).toString(36)).join("");

        const data = await Url.findOne({ name: randomName });

        if (isEmpty(data)) {
          break;
        }
      }
    }

    const newUrl = new Url({
      name: name ? name : randomName,
      url,
    });

    await newUrl.save();

    return res
      .status(httpStatus.OK)
      .json({ message: "Short url generated successfully!!!", name: name ? name : randomName, url });
  } catch (err) {
    console.log('err', err)
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

    return res.status(httpStatus.OK).json({ url });
  } catch (err) {
    return next(err);
  }
};

exports.generateRandomName = async (req, res, next) => {
  try {
    let randomName = "";

    while (true) {
      randomName = times(3, () => random(35).toString(36)).join("");

      const data = await Url.findOne({ name: randomName });

      if (isEmpty(data)) {
        break;
      }
    }

    return res.status(httpStatus.OK).json({ randomName });
  } catch (err) {
    return next(err);
  }
};
