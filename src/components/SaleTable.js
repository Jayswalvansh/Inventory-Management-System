import React from 'react';

export default function SaleTable({ sales }){
  return (
    <div className="card">
      <h3>Sales History</h3>
      {sales.length===0 && <p>No sales recorded</p>}
      <div>
        {sales.map(s=>(
          <div key={s._id} className="product-row">
            <div className="product-info">
              <strong>{s.productName}</strong>
              <div className="small">Qty: {s.quantitySold} · Price: ₹{s.pricePerUnit} · Total: ₹{s.totalAmount}</div>
              <div className="small">Date: {new Date(s.date).toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
