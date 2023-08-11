import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketPage from "./pages/BasketPage/BasketPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/cart/:id" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
