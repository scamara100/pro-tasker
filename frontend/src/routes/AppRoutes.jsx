import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Navbar from '../components/layout/NavBar.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import ProjectPage from '../pages/ProjectPage.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useUser } from '../context/useUser.js'


function AppRoutes() {

  // bring in user info
  const {user} = useUser()
  
  return (
    <>
      <Navbar />
      {user ? 
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/projectpage' element={<ProjectPage />}/>
        <Route path='/*' element={<Navigate to="/Dashboard" />}/>
      </Routes>:
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/*' element={<Navigate to="/login" />}/>
      </Routes>
      }
    </>
  )
}

export default AppRoutes;
