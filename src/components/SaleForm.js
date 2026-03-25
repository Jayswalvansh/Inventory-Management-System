import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SaleForm({ fetchSales, fetchProducts, products }){
  const [productId, setProductId] = useState('');
  const [quantitySold, setQuantitySold] = useState('');

  const recordSale = async ()=>{
    try{
      await axios.post('http://localhost:5000/api/sales', { productId, quantitySold: parseInt(quantitySold, 10) });
      setProductId(''); setQuantitySold('');
      fetchSales();
      fetchProducts();
      alert('Sale recorded successfully!');
    }catch(e){ alert(e.response?.data?.message || 'Error recording sale'); }
  };

  return (
    <div className="card">
      <h3>Record Sale</h3>
      <select value={productId} onChange={e=>setProductId(e.target.value)} className="product-select">
        <option value="">Select Product</option>
        {products.map(p=>(
          <option key={p._id} value={p._id}>{p.name} (Qty: {p.quantity})</option>
        ))}
      </select>
      <input type="number" placeholder="Quantity Sold" value={quantitySold} onChange={e=>setQuantitySold(e.target.value)} min="1" />
      <div><button onClick={recordSale}>Record Sale</button></div>
    </div>
  );
}
