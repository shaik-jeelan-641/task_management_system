import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
   category:{
    type:String,
    enum: ["Web Development", "Mobile App", "Machine Learning"],
    default:"Web Development",
   },
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;