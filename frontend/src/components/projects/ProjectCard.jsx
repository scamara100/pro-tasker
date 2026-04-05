import { useNavigate } from "react-router-dom";
function ProjectCard({ project, onUpdate, onDelete }) {
  const navigate = useNavigate();
  const date = new Date(project.createdAt);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "5px",
        background: "#f4f4f4",
        padding: "10px",
        borderRadius: "8px",
        width: "300px",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/${project._id}`)}
    >
      <div>
        {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          const name = prompt("New project name:", project.name);
          const description = prompt("New description:", project.description);

          if (!name || !description) return;

          onUpdate(project._id, { name, description });
        }}
      >
        Update
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(project._id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ProjectCard;
