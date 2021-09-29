const express = require("express");
const validateZip = require("./middleware/validateZip");
const app = express();

app.get("/check/:zip", validateZip, (req, res, next) => {
  res.send(`Enjoy your trip to ${req.params.zip}!`);
});

app.get("/zoos/:all", validateZip, (req, res, next) => {
  res.send(`Enjoy your trip to ${req.params.all}!`);
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  res.send(`Enjoy your trip to ${req.params.zip}!`);
});

app.use((req, res, next) => {
  res.send(`The route ${req.path} does not exist!`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

module.exports = app;
