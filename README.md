# 🚀 Inventory Management System (Backend)

This project is a backend system built using **Node.js, Express.js, and MongoDB** to manage inventory and track product sales. It provides a set of RESTful APIs to handle product data, monitor stock levels, and record sales transactions efficiently.

---

## 📌 Features

* 📦 Create, update, delete, and view products
* 🔍 Get detailed information of a specific product
* 🧾 Record product sales with automatic calculations
* 📊 Automatically update stock after each sale
* 📈 View overall sales summary (revenue, items sold, total transactions)
* 🔑 Ensures unique SKU for each product
* ⚡ Clean and simple REST API structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Middleware:** CORS, Body-parser

---

## 📂 Project Structure

```
Inventory-Management-System/
│
├── models/          # Database schemas
│   ├── Product.js
│   └── Sale.js
│
├── routes/          # API routes
│   ├── productRoutes.js
│   └── saleRoutes.js
│
├── public/          # Static files
├── src/             # Additional source files
├── server.js        # Entry point of the application
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/Inventory-Management-System.git
```

### 2️⃣ Navigate into the project folder

```
cd Inventory-Management-System
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start the server

```
npm start
```

👉 Server will run on:
`http://localhost:5000`

---

## 🔑 Environment Variables (Optional)

You can create a `.env` file in the root directory:

```
MONGO_URI=mongodb://localhost:27017/inventorydb
PORT=5000
```

---

## 📡 API Endpoints

### 🔹 Product APIs

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | /api/products     | Fetch all products   |
| GET    | /api/products/:id | Fetch single product |
| POST   | /api/products     | Add a new product    |
| PUT    | /api/products/:id | Update product       |
| DELETE | /api/products/:id | Delete product       |

---

### 🔹 Sales APIs

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /api/sales         | Fetch all sales   |
| POST   | /api/sales         | Record a sale     |
| GET    | /api/sales/summary | Get sales summary |

---

## 📊 Data Models

### Product

* **name** – Product name
* **sku** – Unique product identifier
* **price** – Price per unit
* **quantity** – Available stock
* **lastUpdated** – Last updated timestamp

---

### Sale

* **productId** – Reference to product
* **productName** – Name of product
* **quantitySold** – Number of items sold
* **pricePerUnit** – Price at time of sale
* **totalAmount** – Total sale value
* **date** – Sale timestamp

---

## ⚙️ How It Works

* Products are stored in the database with their stock details
* When a sale is recorded:

  * The system calculates total amount automatically
  * Product quantity is reduced
  * Sale is stored in database
* Sales summary API provides:

  * Total revenue
  * Total items sold
  * Total number of sales

---

## 🚀 Improvements Made

* Structured backend using separate route files
* Implemented SKU uniqueness check
* Automated stock updates after each sale
* Added sales summary calculation
* Cleaned and organized codebase

---

## 🔮 Future Enhancements

* 🔐 User authentication (JWT)
* 👥 Role-based access control
* 🔍 Search and filtering functionality
* 📄 Pagination for large datasets
* 📊 Dashboard for analytics
* 🌐 Deployment on cloud

---

## 👨‍💻 Author

**Vansh Jayswal**

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
