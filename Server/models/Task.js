import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: "Pending",
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: "Low",
  },
  dueDate: {
    type: Date,
  },
  assignedTo: {
    type: String,
    ref: 'Auth', 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

taskSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
