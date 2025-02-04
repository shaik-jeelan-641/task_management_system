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
    dependencies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dependency',
        },
    ],
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;