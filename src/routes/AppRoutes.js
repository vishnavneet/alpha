import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Purchase from '../pages/Purchase'
import Forms from '../pages/Forms'
import User from '../pages/user/user'
import Packages from '../pages/user/bookings/package/packages'
import Movies from '../pages/user/bookings/movie/movies'
import Bookings from '../pages/user/bookings/bookings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/purchase" element={<Purchase/>} />
      <Route path="/forms" element={<Forms/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/user/bookings" element={<Bookings/>} />
      <Route path="/user/bookings/packages" element={<Packages/>} />
      <Route path="/user/bookings/movies" element={<Movies/>} />
    </Routes>
  )
}
