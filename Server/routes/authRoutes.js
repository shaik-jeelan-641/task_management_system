import express from "express";
import { Login, Signup, getUser } from "../controllers/authController.js";

const router = express.Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.get("/getUser/:id", getUser);

export default router;
