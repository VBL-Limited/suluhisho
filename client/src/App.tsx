import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Header, HeaderAdmin } from './components'
import Dashboard from './screens/Home'
import { useEffect } from 'react'
import {
  Home,
  About,
  Login,
  SignUp,
  Contact,
  Pricing,
  Post,
  AddJob,
} from './Pages'
import { getToken } from './api/User'

const App = (props: any) => {
  const token = getToken()
  // const navigate = useNavigate()
  // if (!token) {
  //   navigate('/login')
  // }
  useEffect(() => {}, [token])

  return (
    <>
      <BrowserRouter>
        {token ? <HeaderAdmin /> : <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AddJob" element={<AddJob />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/post" element={<Post />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Dashboard />} />
        </Routes>
        {!token ? <Footer /> : null}
      </BrowserRouter>
    </>
  )
}
export default App
