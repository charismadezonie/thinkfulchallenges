const express = require("express");
const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");
const app = express();

app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  getZoos(zip)
    ? res.send(`${zip} exists in our records.`)
    : res.send(`${zip} does not exist in our records.`);
});

app.get("/zoos/all", (req, res, next) => {
  res.send(`Enjoy your trip to ${req.params.all}!`);
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  res.send(`Enjoy your trip to ${req.params.zip}!`);
});

app.use((req, res, next) => {
  res.send("That route could not be found!");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

module.exports = app;
