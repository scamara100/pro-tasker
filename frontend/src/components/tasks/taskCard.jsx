function TaskCard({ task }) {
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
    </div>
  );
}

export default TaskCard;