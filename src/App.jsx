import Screen1 from'./screen1'
import Screen2 from'../src/screen2'
import Screen3 from'../src/screen3'
import Login from'../src/Login'
import Cart from '../src/cart'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css'





function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/screen1' element={<Screen1/>}> </Route>
      <Route path='/screen2' element={<Screen2/>}> </Route>
      <Route path='/screen3' element={<Screen3/>}> </Route>
      <Route path='/Login' element={<Login/>}> </Route>
      <Route path='/cart' element={<Cart/>}> </Route>
      </Routes>
      </BrowserRouter>
     
      
    </>
  )
}

export default App
