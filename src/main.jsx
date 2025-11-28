import React from 'react';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client';
import './index.css'
import{
  RouterProvider,
}from "react-router-dom";
import { router } from './Routers/index.jsx';
import {app}from "./firebaseConfig.js";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    < ToastContainer/>
  </React.StrictMode>,
)
