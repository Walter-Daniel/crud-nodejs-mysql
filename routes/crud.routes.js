const express = require('express');
const router = express();
const { getProduct, createProduct, editProduct, deleteProduct } = require('../controllers/crud.controller');

router.get('/', getProduct);
router.post('/', createProduct);
router.put('/', editProduct);
router.delete('/', deleteProduct);

module.exports = router;