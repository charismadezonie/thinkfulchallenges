const express = require("express");
const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");
const app = express();

const checkForAdmin = (req, res, next) => {
  req.query.admin === "true"
    ? next()
    : next("You do not have access to that route.");
};

app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  getZoos(zip)
    ? res.send(`${zip} exists in our records.`)
    : res.send(`${zip} does not exist in our records.`);
});

app.get("/zoos/all", checkForAdmin, (req, res, next) => {
  res.send(`All zoos: ${getZoos().join("; ")}`);
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  getZoos(zip).length > 0
    ? res.send(`${zip} zoos: ${getZoos(zip).join("; ")}`)
    : res.send(`${zip} has no zoos.`);
});

app.use((req, res, next) => {
  res.send("That route could not be found!");
});

app.use((err, req, res, next) => {
  res.send(err);
});

module.exports = app;
