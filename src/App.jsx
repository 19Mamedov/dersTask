import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Add from './Components/Add'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<Add />} path='/add'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

