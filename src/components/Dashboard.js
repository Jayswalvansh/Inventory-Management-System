import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import CSVTools from './CSVTools';
import SaleForm from './SaleForm';
import SaleTable from './SaleTable';

export default function Dashboard(){
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [salesSummary, setSalesSummary] = useState({ totalSales: 0, totalItems: 0, salesCount: 0 });

  const fetchProducts = async ()=>{
    try{
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    }catch(e){ console.error(e); }
  };

  const fetchSales = async ()=>{
    try{
      const res = await axios.get('http://localhost:5000/api/sales');
      setSales(res.data);
      const summaryRes = await axios.get('http://localhost:5000/api/sales/summary');
      setSalesSummary(summaryRes.data);
    }catch(e){ console.error(e); }
  };

  useEffect(()=>{ fetchProducts(); fetchSales(); }, []);

  return (
    <div>
      <h1>Inventory Dashboard</h1>
      <div className="summary-card">
        <h3>Sales Summary</h3>
        <p>Total Sales: ₹{salesSummary.totalSales}</p>
        <p>Total Items Sold: {salesSummary.totalItems}</p>
        <p>Number of Sales: {salesSummary.salesCount}</p>
      </div>
      <ProductForm fetchProducts={fetchProducts} />
      <ProductTable products={products} fetchProducts={fetchProducts} />
      <SaleForm fetchSales={fetchSales} fetchProducts={fetchProducts} products={products} />
      <SaleTable sales={sales} />
      <CSVTools products={products} />
    </div>
  );
}
