import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },

  avatar: {
    type: String,
    default: '', 
  },
});

const Auth = mongoose.model("Auth", AuthSchema);

export default Auth;
