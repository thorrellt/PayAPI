import { useState, useEffect } from 'react'
import '../styles/App.css'
import Home from './Home'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

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
      <Navbar windowWidth={windowWidth}/>
      <Home windowWidth={windowWidth}/>
      <Footer windowWidth={windowWidth}/>
    </div>
  )
}

export default App
