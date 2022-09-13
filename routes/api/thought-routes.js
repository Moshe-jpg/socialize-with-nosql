const router = require("express").Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/
router.route("/").get(getAllThought);

// /api/thoughts/<userId>
router.route("/:userId").get(getSingleThought).post(addThought).put(updateThought).delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
