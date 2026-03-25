import React from 'react';
import { CSVLink } from 'react-csv';
import Papa from 'papaparse';
import axios from 'axios';

export default function CSVTools({ products }){
  const handleImport = (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    Papa.parse(file, { header:true, skipEmptyLines:true, complete: async (results)=>{
      for(const row of results.data){
        try{
          await axios.post('http://localhost:5000/api/products', {
            name: row.name, sku: row.sku, price: parseFloat(row.price||0), quantity: parseInt(row.quantity||0,10)
          });
        }catch(err){ /* ignore duplicates */ }
      }
      alert('Import done'); window.location.reload();
    }});
  };

  const csvData = products.map(p=>({ name:p.name, sku:p.sku, price:p.price, quantity:p.quantity }));
  return (
    <div className="card">
      <h3>CSV Tools</h3>
      <div>
        <input type="file" accept=".csv" onChange={handleImport} />
      </div>
      <div style={{marginTop:8}}>
        <CSVLink data={csvData} filename={"inventory-export.csv"}>Download CSV</CSVLink>
      </div>
    </div>
  );
}
