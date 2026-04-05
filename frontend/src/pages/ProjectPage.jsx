import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectClient } from "../clients/api";
import TaskCard from "../components/tasks/TaskCard";
import TaskForm from "../components/tasks/taskForm";

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


  // create Task
    const handleAddTask = async (projectId, taskData) => {
      const { data } = await projectClient.post(`/${projectId}/tasks`, taskData);
      setTasks((prev) => [data, ...prev])
    }

    // update Task
    const handleUpdateTask = async (projectId, taskId, update) => {
      await projectClient.put(`/${projectId}/tasks/${taskId}`, update);
      setTasks((prev) => prev.map((task) => task._id === taskId ? { ...task, ...update}: task));
    }

    // delete Task
    const handleDeleteTask = async (projectId, taskId) => {
       await projectClient.delete(`/${projectId}/tasks/${taskId}`);
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    }

  if (!project) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Project Page</h1>

      <h2>{project.name}</h2>
      <p>{project.description}</p>

      <h3>Tasks</h3>

      {/* Add task */}
      <TaskForm onAdd={handleAddTask}/>

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onUpdate={handleUpdateTask} onDelete={handleDeleteTask}/>
      ))}
    </div>
  );
}

export default ProjectPage;
