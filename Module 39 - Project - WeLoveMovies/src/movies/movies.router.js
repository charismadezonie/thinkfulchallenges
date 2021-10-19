const router = require("express").Router();
const { get } = require("request");
const controller = require("./movies.controller");

router.route("/").get(controller.list);
router.route("/:movieId").get(controller.read);

module.exports = router;
