
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hompage from './pages/Homepage/Hompage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Hompage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
   
    </>
  )
}

export default App
