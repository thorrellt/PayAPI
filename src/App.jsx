import { useState, useEffect } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import { 
  Outlet, 
  ScrollRestoration,
useLocation } from "react-router-dom";
import bgCircle from './assets/shared/desktop/bg-pattern-circle.svg'


function App() {
  /********
    STATES
   ********/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)





  /***********************
    FUNCTIONS & LISTENERS
   ***********************/
  //Update windowWidth State on width Change
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)

    return function () {
      window.removeEventListener("resize", watchWidth)
    }
  }, [])



  const onCheckClick = () => {
    setIsChecked(prevIsChecked => !prevIsChecked)
  }

  return (
    <div className="App">
      <Navbar windowWidth={windowWidth} />
      <ScrollRestoration />
      <Outlet />
      <Footer windowWidth={windowWidth} />

      <div className="flex-container bgCircle-container">
        <img
          src={bgCircle}
          className='bgCircle'
          alt="" />
      </div>
    </div>
  )
}

export default App