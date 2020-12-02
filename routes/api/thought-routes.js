const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .router('/')
    .get(getAllThought)
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtById)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughts/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;