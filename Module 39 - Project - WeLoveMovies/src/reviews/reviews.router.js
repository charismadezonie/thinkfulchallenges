const router = require("express").Router({ mergeParams: true });
const { get } = require("request");
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:supplierId([0-9]+)").put(controller.update);
router.route("/").get(controller.read).all(methodNotAllowed);

module.exports = router;
