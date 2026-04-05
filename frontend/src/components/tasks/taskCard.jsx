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

        <button onClick={() => onUpdate(task._id, { status: "todo" })}>
        To Do
        </button>

        <button onClick={() => onUpdate(task._id, { status: "in-progress" })}>
        In Progress
        </button>

        <button onClick={() => onUpdate(task._id, { status: "done" })}>
        Done
        </button>

        <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default TaskCard;