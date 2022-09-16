import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Navbar from './components/shared/Navbar'
import './styles/index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


/********
  ROUTER
 ********/
const router = createBrowserRouter([
  {
    path: "/PayAPI",
    element: <App/>,
    children: [
      {
        path: "/PayAPI",
        element: <Home/>,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "project",
        element: <Project />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
