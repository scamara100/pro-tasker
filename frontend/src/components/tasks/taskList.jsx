import TaskCard from "./TaskCard.jsx";

function TaskList({ tasks, onUpdate, onDelete }) {
  
  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "in-progress");
  const doneTasks = tasks.filter((t) => t.status === "done");
  return (
    <div>
       <div style={{ display: "flex", gap: "20px" }}>
        {/* TODO */}
        <div>
          <h3>To Do</h3>
          {todoTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>

        {/* IN PROGRESS */}
        <div>
          <h3>In Progress</h3>
          {inProgressTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>

        {/* DONE */}
        <div>
          <h3>Done</h3>
          {doneTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskList;