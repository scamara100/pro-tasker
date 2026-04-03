import { useEffect, useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { projectClient } from "../clients/api";

function Dashboard() {
  const [projects, setProject] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  async function handleSubmit(e){
    e.preventDefault()

    try{
      // make a post resquet to create a project (based of the state: name, description)
      const { data } = await projectClient.post('/', {name, description})
      console.log(data)
    } catch(err){
      console.log(err)
    }

  }
  
  useEffect(() => {
    async function getData() {
      try{
        // get our projects from db
        const response = await projectClient.get('/')
        console.log(response.data)
        // save that in component
        setProject(response.data)

      } catch(err){
        console.log(err.response.data)
      }
    }
    getData()
  }, [])


  return (
  <div>
    <h1>Dashboard Page</h1>
    <form onSubmit={handleSubmit}>
      <h2>leave a project here:</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <button type="submit">Send</button>
    </form>

    {projects.map(project => <ProjectCard key={project._id} project={project}/>)}
  </div>)
}

export default Dashboard;