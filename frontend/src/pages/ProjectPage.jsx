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
    const handleAddTask = async (taskData) => {
      try{
        const { data } = await projectClient.post(`/${id}/tasks`, taskData);
        setTasks((prev) => [data, ...prev])
      } catch(err){
        console.log(err.response?.data || err.message)
      }
      
    }

    // update Task
    const handleUpdateTask = async (taskId, update) => {
      try{
         await projectClient.put(`/${id}/tasks/${taskId}`, update);
        setTasks((prev) => prev.map((task) => task._id === taskId ? { ...task, ...update}: task));
      } catch(err){
        console.log(err.response?.data || err.message)
      }
    }

    // delete Task
    const handleDeleteTask = async (taskId) => {
      try{
        await projectClient.delete(`/${id}/tasks/${taskId}`);
        setTasks((prev) => prev.filter((task) => task._id !== taskId));
      } catch(err){
        console.log(err.response?.data || err.message)
      }
    }

  if (!project) return <h2>Loading...</h2>;

  const todoTasks = tasks.filter(t => t.status === "todo");
  const inProgressTasks = tasks.filter(t => t.status === "in-progress");
  const doneTasks = tasks.filter(t => t.status === "done");

  return (
    <div>
      <h1>Project Page</h1>

      <h2>{project.name}</h2>
      <p>{project.description}</p>

      <h3>Tasks</h3>

      {/* Add task */}
      <TaskForm onAdd={handleAddTask}/>

      <div style={{ display: "flex", gap: "20px" }}>
  
  {/* TODO */}
  <div>
    <h3>To Do</h3>
    {todoTasks.map(task => (
      <TaskCard key={task._id} task={task} onUpdate={handleUpdateTask} onDelete={handleDeleteTask}/>
    ))}
  </div>

  {/* IN PROGRESS */}
  <div>
    <h3>In Progress</h3>
    {inProgressTasks.map(task => (
      <TaskCard key={task._id} task={task} onUpdate={handleUpdateTask} onDelete={handleDeleteTask}/>
    ))}
  </div>

  {/* DONE */}
  <div>
    <h3>Done</h3>
    {doneTasks.map(task => (
      <TaskCard key={task._id} task={task} onUpdate={handleUpdateTask} onDelete={handleDeleteTask}/>
    ))}
  </div>

</div>
    </div>
  );
}

export default ProjectPage;
