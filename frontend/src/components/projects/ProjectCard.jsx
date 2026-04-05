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

      <button onClick={() => onUpdate(project._id)}>Update</button>

      <button onClick={() => onDelete(project._id)}>Delete</button>
    </div>
  );
}

export default ProjectCard;
