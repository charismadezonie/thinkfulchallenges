const router = require("express").Router();
const controller = require("./notes.controller");

router.route("/").put(controller.update);

module.exports = router;
