const router = require("express").Router();
const {
  getAllThoughts,
  addThought,
  getSingleThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);
// /api/thoughts/
router.route("/").get(getAllThoughts);
// /api/thoughts/<thoughtId>
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(removeThought);



// /api/thoughts/<thoughtId>/reactions
router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
