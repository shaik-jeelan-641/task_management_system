import express from "express"
import { AddTask, getTasks , getTasksByID , updateTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router()

router.post('/addTask' , AddTask);
router.get('/getTasks' , getTasks);
router.get('/getTasksByID/:id' , getTasksByID);
router.put('/updateTask/:id' , updateTask);
router.delete('/deleteTask/:id' , deleteTask);

export default router;