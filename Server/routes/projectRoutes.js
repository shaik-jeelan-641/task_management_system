import express from "express"
import { addProject, getProjects, getProjectById } from "../controllers/projectController.js"

const router = express.Router()

router.post('/addProject', addProject);
router.get("/getProjects", getProjects)
router.get("/getProjects/:id", getProjectById)

export default router;
