import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './Components'
import { Home, About, Login, SignUp, Contact, Pricing, Post } from './Pages'

const App = (props: any) => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
export default App
