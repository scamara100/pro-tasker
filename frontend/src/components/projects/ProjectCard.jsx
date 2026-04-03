import { useNavigate } from "react-router-dom";
function ProjectCard({ project}){
    const navigate = useNavigate();
    const date = new Date(project.createdAt)
    return (
       
    <div style={{border: "1px solid #ccc, padding: '10px", margin:  "10px", cursor: "pointer"}} onClick={() => navigate(`/projects/${project._id}`)}>
        <div>{date.toLocaleDateString()}  {date.toLocaleTimeString()}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
    </div>
    )
}

export default ProjectCard;