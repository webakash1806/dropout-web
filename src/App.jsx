import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Page/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './Page/Contact'
import Mission from './Page/Company/Mission'
import Vision from './Page/Company/Vision'
import Team from './Page/Company/Team'
import Approach from './Page/Company/Approach'
import WebDev from './Page/WebsitePage/WebDev'

const App = () => {
  return (
    <div className='flex flex-col justify-end min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        {/* Company page routes */}
        <Route path='/company/mission' element={<Mission />} />
        <Route path='/company/vision' element={<Vision />} />
        <Route path='/company/team' element={<Team />} />
        <Route path='/company/approach' element={<Approach />} />

        {/* Website Page Routes */}
        <Route path='/website/web-dev' element={<WebDev />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
