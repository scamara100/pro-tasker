import Project from "../models/Project.js";
import Task from "../models/Task.js";

// Get all projects for the logged-in user
const getAllProjects = async (req, res) => {
  console.log(req.user);

  // This currently finds all projects in the database.
  // It should only find projects owned by the logged in user.
  try {
    const projects = await Project.find({ user: req.user._id })
      .populate("user")
      .sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// GET /api/projects/:id
const getSingleProject = async (req, res) =>{

  try{
    console.log("PROJECT ID:", req.params.id); 
    console.log("USER:", req.user);

    const project = await Project.findOne({_id: req.params.id, user: req.user._id})
   
    if(!project){
      return res.status(404).json({ message: "Project not found" })
    }
    // if I have tasks
    const tasks = await Task.find({project: project._id})
    res.json({project, tasks})
  } catch (err) {
    console.log("FULL ERROR:", err);
    console.log("MESSAGE:", err.message);
    res.status(500).json({ message: err.message });
}
} 

// create a new project
const createNewProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(project);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// update a project by id
const updateProject = async (req, res) => {
  try {
    // find the project first so we can check which user created it (ownership)
    const foundProject = await Project.findById(req.params.id);

    if (!foundProject) {
      return res
        .status(404)
        .json({ message: "No project found with this id!" });
    }

    // compare the project's user id with the logged in user's id
    // if they don't match, it's not our project and we shouldn't be able to update it
    if (foundProject.user.toString() !== req.user._id.toString()) {
      res
        .status(403)
        .json({ message: " User is not authorized to update this project." });
    }

    // update project
    const updateproject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" },
    );
    res.json(updateproject);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    // find the project first so we can check which user created it (ownership)
    const foundProject = await Project.findById(req.params.id);

    if (!foundProject) {
      return res
        .status(404)
        .json({ message: "No project found with this id!" });
    }

    // compare the project's user id with the logged in user's id
    // if they don't match, it's not our project and we shouldn't be able to update it
    if (foundProject.user.toString() !== req.user._id.toString()) {
      res
        .status(403)
        .json({ message: " User is not authorized to delete this project." });
    }

    // delete project
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "project deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export { getAllProjects, getSingleProject, createNewProject, updateProject, deleteProject };
