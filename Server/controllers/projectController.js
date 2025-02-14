import Project from "../models/Project.js";

export const addProject = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    if (!name || !description || !category) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newProject = new Project({ name, description, category });
    await newProject.save();

    res.status(201).json({ message: "Project added successfully", project: newProject });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
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