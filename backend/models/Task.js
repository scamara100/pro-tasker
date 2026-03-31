import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    }
})

const Task = mongoose.model('Task', taskSchema)

export default Task