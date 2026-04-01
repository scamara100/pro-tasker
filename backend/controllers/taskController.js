import Task from "../models/Task.js";
import Project from "../models/Project.js";

// Get all tasks for the logged-in user
const getAllTasks = async (req, res) => {
    console.log(req.user)

    // This currently finds all tasks in the database.
    // It should only find tasks owned by the logged in user.
    try{
        const { projectId } = req.params

        // verify ownership
        const project = await Project.findOne({
            _id: projectId,
            owner: req.user.id
        })

        if(!project){
            return res.status(403).json({ message: 'Unauthorized'})
        }
        // get tasks
        const tasks = await Task.find({ project: projectId }).populate('project')
        res.json(tasks)
    } catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

// create a new task 
const createNewTask = async (req, res) => {
    try{
        const { projectId } = req.params

        // check ownership
        const project = await Project.findOne({
            _id: projectId,
            owner: req.user.id
        })

        if(!project){
            return res.status(403).json({message: 'Unauthorized'})
        }

        // create a task
        const task = await Task.create({
            ...req.body,
            project: projectId
        })
        res.status(201).json(task)
    } catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

// update a task by id
const updateTask = async (req, res) => {
    try{
        const { taskId } = req.params

        // find the task first so we can check which user created it (ownership)
        const foundTask = await Task.findById(taskId)

        if(!foundTask){
           return res.status(404).json({ message: 'No task found with this id!'})
        }

        // find parent project
        const project = await Project.findById(foundTask.project)

        // compare the task's user id with the logged in user's id 
        // if they don't match, it's not our task and we shouldn't be able to update it
        if(!project || project.owner !== req.user.id){
            return res.status(403).json({ message: ' User is not authorized to update this task.'})
        }

        // update task 
        const updateTask = await Task.findByIdAndUpdate(taskId, req.body, { returnDocument: 'after'})
        res.json(updateTask)
    } catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

// Delete a task
const deleteTask = async (req, res) => {
    try{
        const { taskId} = req.params

        // find the task first so we can check which user created it (ownership)
        const foundTask = await Task.findById(taskId)

        if(!foundTask){
           return res.status(404).json({ message: 'No task found with this id!'})
        }
        // find parent task 
        const project = await Project.findById(foundTask.project)

        // compare the task's user id with the logged in user's id 
        // if they don't match, it's not our task and we shouldn't be able to delete it
        if(!project || project.owner !== req.user.id){
            return res.status(403).json({ message: ' User is not authorized to delete this task.'})
        }

        // delete task 
        await Task.deleteOne()
        res.json({ message: 'task deleted!'})
    } catch(err){
        console.log(err)
        res.status(500).json(err)
    }
} 

export { getAllTasks, createNewTask, updateTask, deleteTask}