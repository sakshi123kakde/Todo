const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

// Fetch all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new task
router.post("/", async (req, res) => {
  try {
    const { text, category, priority, dueDate, completed } = req.body;
    const newTask = new Task({ text, category, priority, dueDate, completed });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update task completion status
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, { completed }, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
