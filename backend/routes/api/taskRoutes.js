import express from 'express'
import { getAllTasks, createNewTask, updateTask, deleteTask} from '../../controllers/taskController.js'
import { authMiddleware } from '../../utils/auth.js'

const router = express.Router()

// Apply authMiddleware to all routes in the file
router.use(authMiddleware);

// GET /api/projects/:projectId/tasks - Get all tasks belong a projectId for the logged-in user
router.get('/:projectId/tasks', getAllTasks);

// POST /api/projects/:projectId/tasks - Create a new task
router.post('/:projectId/tasks', createNewTask);

// PUT /api/projects/:projectId/tasks/:taskId - Update a task
router.put('/:projectId/tasks/:taskId', updateTask);

// DELETE /api/projects/:projectId/tasks/:taskId - Delete a task
router.delete('/:projectId/tasks/:taskId', deleteTask);

export default router;