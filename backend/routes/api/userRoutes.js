import express from 'express'
import {createNewUser, loginUser} from '../../controllers/userController.js'
import { authMiddleware } from '../../utils/auth.js';

const router = express.Router();

// POST /api/users/register - Create a new user
router.post('/register', createNewUser);

// POST /api/users/login - Authenticate a user and return a token
router.post('/login', loginUser);

 
// verify our logged in user's token
router.use(authMiddleware)

// after verification send back user info (playload)
router.get('/', (req, res) =>{
    res.status(200).json(req.user)
})

export default router;