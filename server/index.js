// packages
const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./database/db");
const createError = require("http-errors");
const cors = require("cors");

// routes
const urls = require("./api/urls/routes");

// constants
const { backendPort } = require("./config");

const app = express();

// bodyParser middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// cors
app.use(cors());

// connect mongodb
mongoose
  .connect(dbConfig.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Successfully Connected."))
  .catch((err) => console.log("MongoDB connection error: ", err));

// routes
app.use("/api/url", urls);

// backend server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}!`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// error handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;
