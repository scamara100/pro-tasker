import { useEffect, useState } from "react";
import { projectClient } from "../clients/api";
import ProjectForm from "../components/projects/ProjectForm";
import ProjectList from "../components/projects/ProjectList";
import { useParams } from "react-router-dom";


function Dashboard() {
  const { id } = useParams();
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

  // create a Project
  const handleAddProject = async (projectData) => {
    try{
      // make a post resquet to create a project (based of the state: name, description)
      const { data } = await projectClient.post("/", projectData);
      console.log(data);

      // add now project to my state and update UI instantly
      setProjects((prev) => [...prev, data]);
    } catch(err){
      console.log(err.response?.data || err.message)
    }
  }

  // Update a project
  const handleUpdateProject = async (updateProject) => {
    try{
      // make a put resquet to update a project (based of the state: name, description)
      const { data } = await projectClient.put(`/${id}`, updateProject);
      console.log(data);

      // update now project to my state and update UI instantly
      setProjects((prev) => prev.map(project => project._id !== id ? {...project, ...updateProject}: project));
    } catch(err){
      console.log(err.response?.data || err.message)
    }
    
  }

  // Delete a project
  const handleDeleteProject = async () => {
    try{
      // make a post delete to delete a project 
      await projectClient.delete(`/${id}`);
      

      // add now project to my state and update UI instantly
      setProjects((prev) => prev.filter(project => project._id !== id));
    } catch(err){
      console.log(err.response?.data || err.message)
    }
    
  }

  return (
  <div>
    <h1>Dashboard Page</h1>
    
    {/* Add Project */}
    <ProjectForm onAdd={handleAddProject}/>

    <ProjectList projects={projects} onUpdate={handleUpdateProject} onDelete={handleDeleteProject}/>
  </div>)
}

export default Dashboard;