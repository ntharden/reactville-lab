import React from 'react'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'

// Components
import Landing from './Components/Landing/Landing'
import Nav from './Components/Nav/Nav'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'
import Wallet from './Components/Nav/Wallet';

const App = () => {
  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {
    // setCash() will be useful here
}

  return (
    <>
      <Nav></Nav>
      <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/burgers" element={<BurgerShop />} />
            <Route path="/market" element={<SuperMarket handleExchange={handleExchange}/>} />
            <Route path="/wallet" element={<Wallet cash={cash}/>} />
          </Routes>
      </main>
    </>
  )
}

export default App