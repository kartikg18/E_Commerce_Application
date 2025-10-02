import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import CartProvider from './store/CartProvider'
import CartSidebar from './components/CartSidebar'

export default function App(){
  return (
    <CartProvider>
      <div className="app">
        <header className="header">
          <Link to="/" className="logo">Sembark Shop</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product/:id" element={<Product/>} />
          </Routes>
        </main>
        <CartSidebar />
      </div>
    </CartProvider>
  )
}
