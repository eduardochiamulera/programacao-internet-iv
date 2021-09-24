const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produtoController');
const Utils = require('../services/utils');

router.get('/', Utils.verifyJWT, ProdutoController.list);

router.get('/:id', Utils.verifyJWT, ProdutoController.findById);

router.post('/', Utils.verifyJWT, ProdutoController.create);

router.put('/:id', Utils.verifyJWT, ProdutoController.update);

router.delete('/:id', Utils.verifyJWT, ProdutoController.delete);

module.exports = router;