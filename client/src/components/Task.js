function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    // 2. Add a dynamic class based on completion status
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-info">
        {/* 3. Add the checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <p>{task.text}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;