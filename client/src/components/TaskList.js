import React from 'react';
import Task from './Task';

// 1. Receive onToggleTask
function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        // 2. Pass it down to Task
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      ))}
    </div>
  );
}

export default TaskList;