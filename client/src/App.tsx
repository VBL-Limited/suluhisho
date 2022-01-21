import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { Header, Loading } from './Components'
import { Home, About, Contact, Pricing } from './Pages'
const App = () => {
  return (
    <>
      <div>
        <Header />

        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App
