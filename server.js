const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/saleRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/inventorydb';
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log('✅ MongoDB Connected'))
  .catch(e=>console.error('❌ MongoDB Error', e));

app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}`));
