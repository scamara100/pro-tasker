function TaskCard({ task, onUpdate, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "8px",
        margin: "5px",
      }}
    >
      <h4>{task.title}</h4>
      <p>Description: {task.description}</p>
      <p>Status: {task.status}</p>

      <button onClick={() => onUpdate(task._id, { status: 'done'})}>Mark Done</button>

      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default TaskCard;