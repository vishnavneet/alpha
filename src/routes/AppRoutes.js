import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Purchase from '../pages/Purchase'
import Forms from '../pages/Forms'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/purchase" element={<Purchase/>} />
      <Route path="/forms" element={<Forms/>} />
    </Routes>
  )
}
