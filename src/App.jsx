import React from 'react'
import Narbar from './components/Narbar/Narbar'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'



 const App = () => {
  return (
    <div className='app'>
    <Narbar/>
    <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/cart' element={<Cart/>}/>
 <Route path='/order' element={<PlaceOrder/>}/>

    </Routes>
    </div>
  )
}

export default App;