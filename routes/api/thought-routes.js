const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
  .get(getAllThought)
  .post(addThought); // expects {"thoughtText": "", "username": "", "userId": ""}

// /api/thoughts/<thoughtId>
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);  

// /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions').post(addReaction); // expects {"reactionBody": "", "username": ""}

// /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
