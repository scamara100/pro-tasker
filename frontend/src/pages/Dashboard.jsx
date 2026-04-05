import { useEffect, useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { projectClient } from "../clients/api";
import ProjectForm from "../components/projects/ProjectForm";
// import { useParams } from "react-router-dom";


function Dashboard() {
  // const { id } = useParams();

  const [projects, setProjects] = useState([])
  useEffect(() => {
    async function fetchProjects() {
      try{
        // get our projects from db
        const response = await projectClient.get('/')
        console.log(response.data)
        // save that in component
        setProjects(response.data)

      } catch(err){
        console.log(err.response?.data || err.message)
      }
    }
    fetchProjects()
  }, [])

  const handleAddProject = async (projectData) => {
    // make a post resquet to create a project (based of the state: name, description)
      const { data } = await projectClient.post("/", projectData);
      console.log(data);

      // add now project to my state and update UI instantly
      setProjects((prev) => [...prev, data]);
  }

  return (
  <div>
    <h1>Dashboard Page</h1>
    
    {/* Add Project */}
    <ProjectForm onAdd={handleAddProject}/>

    {projects.map(project => <div key={project._id}><ProjectCard  project={project}/></div>)}
  </div>)
}

export default Dashboard;