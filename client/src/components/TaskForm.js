import React, { useState } from 'react';

// 1. Receive the onAddTask function as a prop
function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Don't add empty tasks

    // 2. Call the function from the parent and pass the input's text
    onAddTask(text);

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
//```    *   **`function TaskForm({ onAddTask })`**: We receive the function via props, just like we did with data before.
//*   **`onAddTask(text);`**: Inside our submit handler, we now call the prop function `onAddTask` and pass it the current `text` from our local state.