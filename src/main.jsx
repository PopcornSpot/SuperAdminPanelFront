import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RouterComponent from './Components/RouterComponent'
import App from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RouterComponent/>
  <ToastContainer/>
  {/* <App/> */}
  </BrowserRouter>
)
