import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import RouterComponent from './Components/RouterComponent'
// import App from './App'
import RouterComponent from './Components/RouterComponent'
import App from './App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RouterComponent/>
  {/* <App/> */}
  </BrowserRouter>
)
