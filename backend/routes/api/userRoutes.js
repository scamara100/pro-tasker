import express from 'express'
import {createNewUser, loginUser} from '../../controllers/userController.js'

const router = express.Router();

// POST /api/users/register - Create a new user
router.post('/register', createNewUser);

// POST /api/users/login - Authenticate a user and return a token
router.post('/login', loginUser);

export default router;