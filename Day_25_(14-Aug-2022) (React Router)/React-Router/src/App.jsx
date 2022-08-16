import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Contact from './Contact'
import Home from './Home'
import About from './About'
import MainNavbar from './MainNavbar'
import SingleAbout from './SingleAbout'
import DetailsAbout from './DetailsAbout'
import NotFound from './NotFound'


function App() {

  return (
    <Container className='mt-5'>

      <BrowserRouter>
      <MainNavbar/>
        <div className="container text-center mt-5">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />}>
              <Route path='/about' element={<About />} />
              <Route path='/about/single-about' element={<SingleAbout />} />
              <Route path='/about/details-about' element={<DetailsAbout />} />
            </Route>
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  )
}

export default App
