import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Page/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './Page/Contact'

const App = () => {
  return (
    <div className='flex flex-col justify-end min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
