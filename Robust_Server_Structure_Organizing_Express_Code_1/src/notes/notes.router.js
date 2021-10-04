const router = require("express").Router();
const controller = require("./notes.controller");

router.route("/").get(controller.list).post(controller.create);
router
  .route("/:noteId")
  .put(controller.update)
  .delete(controller.destroy)
  .get(controller.read);

module.exports = router;
