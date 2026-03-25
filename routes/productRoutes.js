const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ name: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error', err });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json(p);
  } catch (err) {
    res.status(500).json({ message: 'Error', err });
  }
});

// Add product
router.post('/', async (req, res) => {
  try {
    const { name, sku, price, quantity } = req.body;
    const existing = await Product.findOne({ sku });
    if (existing) return res.status(400).json({ message: 'SKU already exists' });
    const prod = new Product({ name, sku, price, quantity });
    await prod.save();
    res.json({ message: 'Product added' });
  } catch (err) {
    res.status(500).json({ message: 'Error', err });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
    const { name, sku, price, quantity } = req.body;
    const prod = await Product.findById(req.params.id);
    if (!prod) return res.status(404).json({ message: 'Not found' });
    prod.name = name; prod.sku = sku; prod.price = price; prod.quantity = quantity;
    prod.lastUpdated = Date.now();
    await prod.save();
    res.json({ message: 'Updated' });
  } catch (err) {
    res.status(500).json({ message: 'Error', err });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error', err });
  }
});

module.exports = router;
