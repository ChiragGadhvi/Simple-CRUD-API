const express = require("express");
const router = express.Router();
const Product = require('../models/product.model.js');
const { updateProduct, deleteProduct, getProducts, getProduct, createProduct } = require('../controllers/product.controller.js');

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', createProduct);

// update a Product
router.put('/:id', updateProduct);

// delete a Product
router.delete('/:id', deleteProduct);

module.exports = router; 