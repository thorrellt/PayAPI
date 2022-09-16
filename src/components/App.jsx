import { useState, useEffect } from 'react'
import '../styles/App.css'
import Home from './Home'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  /********
    STATES
   ********/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  /********
    ROUTER
   ********/
  const router = createBrowserRouter([
    {
      path: "/PayAPI",
      element: <Home windowWidth={windowWidth}/>,
    },
    {
      path: "/PayAPI",
      element: <Home windowWidth={windowWidth}/>,
    },
  ]);

  

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
      <RouterProvider router={router} />
      <Footer windowWidth={windowWidth}/>
    </div>
  )
}

export default App
