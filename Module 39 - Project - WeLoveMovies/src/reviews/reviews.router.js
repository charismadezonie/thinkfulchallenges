const router = require("express").Router();
const { get } = require("request");
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

module.exports = router;
