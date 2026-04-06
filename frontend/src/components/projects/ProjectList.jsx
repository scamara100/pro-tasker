import ProjectCard from "./ProjectCard.jsx";
function ProjectList({ projects, onUpdate, onDelete }) {
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <ProjectCard
            onUpdate={onUpdate}
            onDelete={onDelete}
            project={project}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
