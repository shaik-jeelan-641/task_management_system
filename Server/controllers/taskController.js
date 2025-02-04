import Task from "../models/Task.js";

export const AddTask = async (req, res) => {
    try {
        const { title, description, status, priority, dueDate, assignedTo, createdAt } = req.body;
         if (!title || !description || !status || !priority || !dueDate || !assignedTo) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newTask = new Task({
            title,
            description,
            status,
            priority,
            dueDate,
            assignedTo,
            createdAt,
        });

        const saveTask = await newTask.save();
        res.status(201).json(saveTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTasks = async (req, res) => {
    try {
        const existingTasks = await Task.find();
        res.status(200).json(existingTasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTasksByID = async (req, res) => {
    try {
        const existTask = await Task.findById(req.params.id).populate('assignedTo').populate('createdAt');
        res.status(200).json(existTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { title, description, status, priority, dueDate, assignedTo } = req.body;
        const updateTask = await Task.findByIdAndUpdate(req.params.id, {
            title,
            description,
            status,
            priority,
            dueDate,
            assignedTo,
            updatedAt: Date.now(),
        }, { new: true });

        if (!updateTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(updateTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
