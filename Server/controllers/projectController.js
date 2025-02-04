import Project from "../models/Project.js";

export const addProject = async (req, res) => {
    try {
        const { name, description, dependencies } = req.body;

        if (!name || !description) {
            return res.status(400).json({ message: "Name and description are required" });
        }

        const project = new Project({ name, description, dependencies });
        await project.save();

        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};