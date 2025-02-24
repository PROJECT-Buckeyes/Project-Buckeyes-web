import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import OrderDetail from './Orders/data';
import Payment from './Payment/Payment';

function App() {
  const openMenu = () => {
    console.log("Button clicked");
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <div className="grid-container">
<head>
    <title>Buckeyes</title>
    <link rel="stylesheet" href="style.css"></link>
</head>
<body>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Buckeyes</a>
            </div>
            <div className="header-links">
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/payment">Payment</Link>
            </div>
        </header>

            <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>      <a href="index.html">Pants</a>       </li>
                <li>      <a href="index.html">Shirts</a>      </li>
            </ul>
        </aside>
        <main className="main">
        
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/order/:id" element={<data />} />
                <Route path="/payment" element={<Payment />} />
              </Routes>

        </main>
        <footer className="footer">
            &copy; 2025 Buckeyes
        </footer>
    </div>
</body>
</div>
  );
}

export default App;
