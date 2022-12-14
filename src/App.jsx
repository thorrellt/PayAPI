import { useState, useEffect } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Circle from './components/shared/Circle'
import {
  Outlet,
  useLocation
} from "react-router-dom";
import bgCircle from './assets/shared/desktop/bg-pattern-circle.svg'


function App() {
  /****************
    STATES & HOOKS
   ****************/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)


  let location = useLocation();


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

  //scroll to top on page change
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      console.log('location updated')
    }, 10)
  }, [location]);


  const onCheckClick = () => {
    setIsChecked(prevIsChecked => !prevIsChecked)
  }

  return (
    <div className="App">
      <Navbar windowWidth={windowWidth} />
      <Outlet />
      <Footer windowWidth={windowWidth} />

      {location.pathname !== '/PayAPI' &&
        location.pathname !== '/PayAPI/project' &&
        location.pathname !== '/PayAPI/' &&
        <Circle />}
    </div>
  )
}

export default App
