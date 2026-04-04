import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectClient } from "../clients/api";
import TaskCard from "../components/tasks/TaskCard";

function ProjectPage() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchProject() {
      try {
        const { data } = await projectClient.get(`/${id}`);
        console.log(data)
        setProject(data.project);
        setTasks(data.tasks);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProject();
  }, [id]);

  if (!project) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Project Page</h1>

      <h2>{project.name}</h2>
      <p>{project.description}</p>

      <h3>Tasks</h3>

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}

export default ProjectPage;
