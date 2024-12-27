import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  const calculateDeadlinePriority = (dueDate) => {
    if (!dueDate) return "🟢 No Deadline";

    const now = new Date();
    const due = new Date(dueDate);
    const diffInDays = (due - now) / (1000 * 60 * 60 * 24);

    if (diffInDays < 0) return "🔴 Overdue";
    if (diffInDays <= 1) return "🔴 Due Today";
    if (diffInDays <= 3) return "🟡 Due in 3 Days";
    return "🟢 No Immediate Deadline";
  };

  return (
    <li
      className={`task-item priority-${task.priority.toLowerCase()} ${
        task.completed ? "completed-task" : ""
      }`}
    >
      <div className="task-details">
        <span>
          {task.text} [{task.category}]
        </span>
        <span className="task-due">
          {calculateDeadlinePriority(task.dueDate)}{" "}
          <span
            className={`task-priority priority-${task.priority.toLowerCase()}`}
          >
            ({task.priority})
          </span>
        </span>
      </div>
      <div >
        <button
          onClick={() => toggleComplete(task._id)}
          className={`btn ${
            task.completed ? "btn-warning" : "btn-success"
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => deleteTask(task._id)}
          className="btn btn-danger mx-3"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
