const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  price: { type: Number, required: true, default: 0 },
  quantity: { type: Number, required: true, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Product', productSchema);
