import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Feed from './pages/Feed'
import Navbar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/feed' element={<Feed />}/>
      </Routes>
    </>
  )
}

export default App
