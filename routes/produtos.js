const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produtoController');
const Utils = require('../services/utils');

router.get('/', ProdutoController.list);

router.get('/:id', ProdutoController.findById);

router.post('/', ProdutoController.create);

router.put('/:id', ProdutoController.update);

router.delete('/:id', ProdutoController.delete);

module.exports = router;