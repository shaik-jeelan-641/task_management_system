import Auth from "../models/Auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({ token, username: user.username });
  } catch (error) {
    console.error("Login error:", error); 
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const Signup = async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Auth({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export const getUser = async (req, res) => {
    try {
        const { id } = req.params; 

   
        if (!id || id.length !== 24) {
            return res.status(400).json({ error: "Invalid or missing user ID" });
        }

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};