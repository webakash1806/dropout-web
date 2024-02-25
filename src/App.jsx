import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Page/Home'

const App = () => {
  return (
    <div className='flex flex-col justify-end min-h-screen'>
      <Header />
      <Home />
      <Footer />

    </div>
  )
}

export default App
