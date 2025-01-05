import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await fetch("https://todobackend-prpc.onrender.com");
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add Task
  const addTask = async (newTask) => {
    try {
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  // Toggle Task Completion
  const toggleComplete = async (id) => {
    const task = tasks.find((task) => task._id === id);
    if (!task) return;

    const updatedTask = { ...task, completed: !task.completed };

    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: updatedTask.completed }),
      });
      const data = await response.json();
      setTasks(tasks.map((task) => (task._id === id ? data : task)));
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task._id !== id));
      // calculateProgress();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          margin: "5%",
          fontSize: "2.5rem",
          color: "#4A90E2",
        }}
      >
        📝 Todo List
      </h1>
      <p  className="animate-charcter">
      Stay Organized, Stay Ahead!
      </p>

      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
