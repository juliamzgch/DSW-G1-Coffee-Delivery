import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from "react-router"
import { BrowserRouter } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              </Route>
              <Route path="/order/:orderId/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
