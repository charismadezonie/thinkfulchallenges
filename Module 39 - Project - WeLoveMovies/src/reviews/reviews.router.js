const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:reviewId([0-9]+)")
  .get(controller.read)
  .put(controller.put)
  .delete(controller.delete)
  .all(methodNotAllowed);
router.route("/").all(methodNotAllowed);

module.exports = router;
