import './App.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Navbar from './components/layout/NavBar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/projectpage' element={<ProjectPage />}/>
      </Routes>
    </>
  )
}

export default App
