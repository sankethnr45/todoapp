import React from 'react';

// The function is no longer commented out
function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    // The className logic is correct
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-info">
        <input
          type="checkbox"
          checked={task.completed}
          // The logic here is correct, calling onToggleTask with task._id
          onChange={() => onToggleTask(task._id)}
        />
        <p>{task.text}</p>
      </div>
      <div className="task-actions">
        {/* The invalid comment is removed, and the logic is correct */}
        <button onClick={() => onDeleteTask(task._id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;