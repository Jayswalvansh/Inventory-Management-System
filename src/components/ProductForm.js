import React, { useState } from 'react';
import axios from 'axios';
export default function ProductForm({ fetchProducts }){
  const [name,setName]=useState(''); const [sku,setSku]=useState(''); const [price,setPrice]=useState(''); const [quantity,setQuantity]=useState('');
  const add = async ()=>{
    try{
      await axios.post('http://localhost:5000/api/products', { name, sku, price: parseFloat(price), quantity: parseInt(quantity,10) });
      setName(''); setSku(''); setPrice(''); setQuantity(''); fetchProducts();
    }catch(e){ alert(e.response?.data?.message || 'Error adding'); }
  };
  return (
    <div className="card">
      <h3>Add Product</h3>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Product type" value={sku} onChange={e=>setSku(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} />
      <input placeholder="Quantity" value={quantity} onChange={e=>setQuantity(e.target.value)} />
      <div><button onClick={add}>Add</button></div>
    </div>
  );
}
