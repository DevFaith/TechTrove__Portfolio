import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Contacts from './Pages/Contact'
import Projects from './Pages/Projects'


import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    < >

      <BrowserRouter>
      <div className='z-10'>
      <Header />
      </div>
      
        <Routes>
          <Route path='/' element={<Home />} />
         <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
      
       
    </>
      
    
  )
}

export default App
