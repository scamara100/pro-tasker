function ProjectCard({ project}){
    return (
        <div>
            <div key={project._id}>
            <div>{new Date(project.createdAt).toLocaleDateString()}  {new Date(project.createdAt).toLocaleTimeString()}</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            </div>
      </div>
    )
}

export default ProjectCard;