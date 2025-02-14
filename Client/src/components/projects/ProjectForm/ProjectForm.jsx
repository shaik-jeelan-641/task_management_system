import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Paper, MenuItem } from "@mui/material";
import { useProject } from "../../../context/projectContext"; 
import "./projectForm.css";

function ProjectForm() {
  const { setProjectName } = useProject(); 
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:5000/api/projects/addProject",
      formData,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("Project Added:", response.data);
    setFormData({ name: "", description: "", category: "" });
  } catch (err) {
    console.error("Error submitting project:", err.response?.data || err.message);
  }
};

  return (
    <div className="form-container">
      <Paper elevation={3} className="project-form">
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Project Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={3}
          />
          <TextField
            select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            required
          >
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="Mobile App">Mobile App</MenuItem>
            <MenuItem value="Machine Learning">Machine Learning</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" sx={{ backgroundColor: "#4caf50", color: "white" }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default ProjectForm;
