import { useState } from 'react'
import ScrollContainer from './components/ScrollContainer';
import Navbar from './components/Navbar'
import './App.css'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import BussCard from './components/BussCard'
import Ies from './components/ies'
import Footer from './components/Footer'


function App() {
  

  const [count, setCount] = useState(0)

  return (
    <ScrollContainer>
    
     <div className=' min-h-screen w-full bg-[#f1f1f1]'>
      <Navbar/> 
       <LandingPage/>
      <Marquee/>
       <About/>
       <Eyes/>
       <Feature/> 
       <BussCard/>
       <Ies/>
       <Footer/>.
    </div>
    
    </ScrollContainer>
  )
}

export default App
