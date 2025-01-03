import { useState } from 'react'
 
import './App.css'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components'
import { BrowserRouter, Form } from 'react-router-dom'
// import Stars from './components/canvas/Stars';
import { herbg } from './assets/assets';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter> 
       <div className="ralative z-0 ">
        <div className=" bg-cover bg-no-repeat bg-center h-screen  z-10"  style={{ backgroundImage: `url(${herbg})` }}>  
            
          <Navbar/>
          <Hero/>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>

        </div>
       </div>
       
   
       </BrowserRouter>
       
    </>
  )
}

export default App
