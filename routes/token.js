const express = require('express');
const router = express.Router();
const TokenController = require('../controllers/tokenController');
const Utils = require('../services/utils');

router.post('/', TokenController.authenticate);

router.post('/logout', Utils.verifyJWT, TokenController.logout);

module.exports = router;