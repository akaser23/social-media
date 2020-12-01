const {
    addThought,
    removeThought,
    addResponse,
    removeResponse
} = require('../../controllers/thought-controller');

const router = require('express').Router();

router.route('/:userId').post(addThought);

router
.route('/:userId/:thoughtId')
.put(addResponse)
.delete(removeThought)

router.route('/:userId/:thoughtId/:responseId').delete(removeResponse);

module.exports = router;