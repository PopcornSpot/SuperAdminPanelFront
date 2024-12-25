import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AppComponent from './App'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppComponent/>
  <ToastContainer/>
  </BrowserRouter>
)
