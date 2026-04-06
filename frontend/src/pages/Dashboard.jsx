import { useEffect, useState } from "react";
import { projectClient } from "../clients/api.js";
import ProjectForm from "../components/projects/ProjectForm.jsx";
import ProjectList from "../components/projects/ProjectList.jsx";



function Dashboard() {
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
  const handleUpdateProject = async (projectId, updates) => {
    try{
      // make a put resquet to update a project (based of the state: name, description)
      const { data } = await projectClient.put(`/${projectId}`, updates);

      console.log(data);

      // update now project to my state and update UI instantly
      setProjects((prev) => prev.map(project => project._id === projectId ? data : project));
    } catch(err){
      console.log(err.response?.data || err.message)
    }
    
  }

  // Delete a project
  const handleDeleteProject = async (projectId) => {
    try{
      // make a post delete to delete a project 
      await projectClient.delete(`/${projectId}`);
      

      // add now project to my state and update UI instantly
      setProjects((prev) => prev.filter(project => project._id !== projectId));
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