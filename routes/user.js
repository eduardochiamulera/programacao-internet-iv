const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const Utils = require('../services/utils');

router.post('/', Utils.verifyJWT, UserController.create);

module.exports = router;