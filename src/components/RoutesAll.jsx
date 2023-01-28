import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from './Categories'
import Home from './Home'
import Search from './Search'

const RoutesAll = () => {
  return (
    
        <Routes>
            <Route path='/search' element={<Search/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
 
  )
}

export default RoutesAll