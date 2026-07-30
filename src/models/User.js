const mongoose = require("mongoose");

// 1. Define the Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// 2. Create the Model
const User = mongoose.model("User", userSchema);

// 3. Export the Model
module.exports = User;