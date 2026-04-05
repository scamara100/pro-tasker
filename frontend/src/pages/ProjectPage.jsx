import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectClient } from "../clients/api";
import TaskForm from "../components/tasks/taskForm";
import TaskList from "../components/tasks/taskList";

function ProjectPage() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchProject() {
      try {
        const { data } = await projectClient.get(`/${id}`);
        console.log(data);
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
    try {
      const { data } = await projectClient.post(`/${id}/tasks`, taskData);
      setTasks((prev) => [data, ...prev]);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  // update Task
  const handleUpdateTask = async (taskId, update) => {
    try {
      await projectClient.put(`/${id}/tasks/${taskId}`, update);
      setTasks((prev) =>
        prev.map((task) =>
          task._id === taskId ? { ...task, ...update } : task,
        ),
      );
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  // delete Task
  const handleDeleteTask = async (taskId) => {
    try {
      await projectClient.delete(`/${id}/tasks/${taskId}`);
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  if (!project) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Project Page</h1>

      <h2>{project.name}</h2>
      <p>{project.description}</p>

      <h3>Tasks</h3>

      {/* Add task */}
      <TaskForm onAdd={handleAddTask} />

      <TaskList
        tasks={tasks}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default ProjectPage;
