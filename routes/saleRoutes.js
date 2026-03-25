const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');
const Product = require('../models/Product');

// Get all sales
router.get('/', async (req, res) => {
  try {
    const sales = await Sale.find().sort({ date: -1 });
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: 'Error', err });
  }
});

// Record a sale
router.post('/', async (req, res) => {
  try {
    const { productId, quantitySold } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.quantity < quantitySold) return res.status(400).json({ message: 'Insufficient quantity' });

    const totalAmount = product.price * quantitySold;
    const sale = new Sale({
      productId,
      productName: product.name,
      quantitySold,
      pricePerUnit: product.price,
      totalAmount
    });
    await sale.save();

    // Update product quantity
    product.quantity -= quantitySold;
    product.lastUpdated = Date.now();
    await product.save();

    res.json({ message: 'Sale recorded', sale });
  } catch (err) {
    res.status(500).json({ message: 'Error', err });
  }
});

// Get sales summary
router.get('/summary', async (req, res) => {
  try {
    const sales = await Sale.find();
    const totalSales = sales.reduce((sum, sale) => sum + sale.totalAmount, 0);
    const totalItems = sales.reduce((sum, sale) => sum + sale.quantitySold, 0);
    res.json({ totalSales, totalItems, salesCount: sales.length });
  } catch (err) {
    res.status(500).json({ message: 'Error', err });
  }
});

module.exports = router;
