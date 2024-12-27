const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: String,
  category: String,
  priority: String,
  dueDate: String,
  completed: Boolean,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
