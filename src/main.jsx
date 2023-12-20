import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Route'
import { HelmetProvider } from 'react-helmet-async';
import GlobalAuth from './AuthProvider/GlobalAuth'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalAuth>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </GlobalAuth>
  </React.StrictMode>,
)
