const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String , default: "Medium" },
  dueDate: { type: Date },
  completed: { type: Boolean, default: false }
}, { timestamps: true });  // this auto-adds createdAt AND updatedAt for you

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
