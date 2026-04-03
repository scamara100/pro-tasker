import { useEffect, useState } from "react";

import { projectClient } from "../clients/api";

function Dashboard() {
  const [project, setProject] = useState([])
  useEffect(() => {
    async function getData() {
      try{
        // get our projects from db
        const response = await projectClient.get('/')
        console.log(response.data)
        // save that in component
        setProject(response.data)

      } catch(err){
        console.log(err)
      }
    }
    getData()
  }, [])


  return <div>Dashboard Page</div>;
}

export default Dashboard;