const router = require("express").Router();
const { get } = require("request");
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:supplierId").put(controller.update).all(methodNotAllowed);

module.exports = router;
