import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      text: taskInput,
      category,
      priority,
      dueDate,
      completed: false,
    };

    addTask(newTask);
    setTaskInput("");
    setDueDate("");
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        className="form-control"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
