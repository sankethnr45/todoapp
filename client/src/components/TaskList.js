import React from 'react';
import Task from './Task';

// ...
function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task._id} // <-- CHANGE HERE
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      ))}
    </div>
  );
}
// ...

export default TaskList;