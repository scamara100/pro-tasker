import express from "express";
import {
  getAllProjects,
  getSingleProject,
  createNewProject,
  updateProject,
  deleteProject,
} from "../../controllers/projectController.js";
import { authMiddleware } from "../../utils/auth.js";

const router = express.Router();

// Apply authMiddleware to all routes in the file
router.use(authMiddleware);

// GET /api/projects - Get all projects for the logged-in user
router.get("/", getAllProjects);

// GET /api/projects/:id
router.get('/:id', getSingleProject);

// POST /api/projects - Create a new project
router.post("/", createNewProject);

// PUT /api/projects/:id - Update a project
router.put("/:id", updateProject);

// DELETE /api/projects/:id - Delete a project
router.delete("/:id", deleteProject);

export default router;
