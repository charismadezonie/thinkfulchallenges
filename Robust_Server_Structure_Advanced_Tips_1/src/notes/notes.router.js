const router = require("express").Router({ mergeParams: true });
const controller = require("./notes.controller");
const ratingsRouter = require("../ratings/ratings.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.use("/:noteId/ratings", controller.noteExists, ratingsRouter);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);
router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;
