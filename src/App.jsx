import React from 'react'
import LoadingModal from './components/LoadingModel'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Login from './pages/Login';
import Products from './pages/Products';
import NotFound from './components/NotFound';
import Services from './pages/Services';
import Contact from './pages/Contact';
export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/product' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
