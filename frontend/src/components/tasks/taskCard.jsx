function TaskCard({ task, onUpdate, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "5px",
        background: "#f4f4f4",
        padding: "10px",
        borderRadius: "8px",
        width: "300px"
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