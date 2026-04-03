import { useEffect, useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { projectClient } from "../clients/api";

function Dashboard() {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState({ name: "", description: "" });


  async function handleSubmit(e){
    e.preventDefault()

    try{
      // make a post resquet to create a project (based of the state: name, description)
      const { data } = await projectClient.post('/', form)
      console.log(data)

      // add now project to my state and update UI instantly
      setProjects((prev) => [...prev, data])

      // reset my form 
      setForm({name: "", description: ""})
    } catch(err){
      console.log(err)
    }

  }
  
  useEffect(() => {
    async function fetchProjects() {
      try{
        // get our projects from db
        const response = await projectClient.get('/')
        console.log(response.data)
        // save that in component
        setProjects(response.data)

      } catch(err){
        console.log(err.response.data)
      }
    }
    fetchProjects()
  }, [])


  return (
  <div>
    <h1>Dashboard Page</h1>
    <form onSubmit={handleSubmit}>
      <h2>leave a project here:</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={form.name} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}/>

      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" value={form.description} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} />

      <button type="submit">Send</button>
    </form>

    {projects.map(project => <div key={project._id}><ProjectCard  project={project}/></div>)}
  </div>)
}

export default Dashboard;