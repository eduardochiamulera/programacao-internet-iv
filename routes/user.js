const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const Utils = require('../services/utils');

router.post('/', UserController.create);

router.get('/', Utils.verifyJWT, UserController.list);

router.get('/:id', Utils.verifyJWT, UserController.findById);

router.put('/:id', Utils.verifyJWT, UserController.update);

router.delete('/:id', Utils.verifyJWT, UserController.delete);

module.exports = router;