import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ReDactApp from './ReDact'

export default function Controler() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/redact' element={<ReDactApp/>}/>
        <Route path='*' element={<div>404</div>}/>
      </Routes>
    </div>
  )
}