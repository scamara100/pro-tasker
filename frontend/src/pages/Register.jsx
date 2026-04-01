import { useState } from "react";
import { userClient} from '../clients/api.js'
import { useUser } from "../context/useUser.js";
import { useNavigate } from "react-router-dom";


function Register() {

  // bring the setter function for the context
  const {setUser} = useUser()

  const navigate = useNavigate()
  
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
      e.preventDefault()

      console.log(form)

      try{
        // send the form data to our backend
        const response = await userClient.post('/register', form)
        console.log(response.data)

        // take the token and stored it locally
        localStorage.setItem('token', response.data.token)

        // save some user data in our state
        setUser(response.data.user)

        // take the user to the different pages 
        navigate('/feed')
        
      } catch(err){
        console.log(err)
            alert(err.message)
      }

    }
  return (
    <div>
    <h1>Register Page</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input onChange={handleChange} value={form.username} id="username" name="username" type="text" />

      <label htmlFor="email">Email</label>
      <input onChange={handleChange} value={form.email} id="email" name="email" type="email" />

      <label htmlFor="password">Password</label>
      <input onChange={handleChange} value={form.password} id="password" name="password" type="password" />

    <button>Regidter</button>
    </form>
    </div>
)
}

export default Register;
