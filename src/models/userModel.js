import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    reuired: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  resetPasswordExpires: Date,
  verifyToken: String,
  verifyTokenExpire: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
