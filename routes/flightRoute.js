const express = require('express')

const controller = require('../controllers/flightController')

const router = express.Router();

router.get('/', controller.getBook);

router.post('/', controller.flightBook);

router.get('/:id', controller.getUserBook)

router.delete('/:id', controller.deleteBook);

router.patch('/:id', controller.updateBook);

module.exports = router;
