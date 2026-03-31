import 'dotenv/config'
import express from "express";
import './config/connection.js'
import userRoutes from './routes/api/userRoutes.js'
import projectRoutes from './routes/api/projectRoutes.js'
import taskRoutes from './routes/api/taskRoutes.js'

// bring in cors
import cors from 'cors'

const app = express();
const port = process.env.PORT || 8081;

app.use(cors())
app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)

app.listen(port, () => {
  console.log("Server listening on port: localhost:", port);
});
