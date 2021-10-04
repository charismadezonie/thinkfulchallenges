const router = require("express").Router();
const controller = require("./notes.controller");

router.route("/").put(controller.update).post(controller.create);

module.exports = router;
