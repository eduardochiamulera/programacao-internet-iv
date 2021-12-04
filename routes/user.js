const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const Utils = require('../services/utils');

router.post('/', UserController.create);

router.get('/', UserController.list);

router.get('/:id',UserController.findById);

router.put('/:id', UserController.update);

router.delete('/:id', UserController.delete);

module.exports = router;