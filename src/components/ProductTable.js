import React from 'react';
import axios from 'axios';
export default function ProductTable({ products, fetchProducts }){
  const del = async (id)=>{ if(!window.confirm('Delete?')) return; await axios.delete('http://localhost:5000/api/products/'+id); fetchProducts(); };
  return (
    <div className="card">
      <h3>Products</h3>
      {products.length===0 && <p>No products</p>}
      <div>
        {products.map(p=>(
          <div key={p._id} className="product-row">
            <div className="product-info">
              <strong>{p.name}</strong>
              <div className="small">Price: ₹{p.price} · Qty: {p.quantity}</div>
            </div>
            <div className="product-actions">
              <button onClick={()=>del(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
