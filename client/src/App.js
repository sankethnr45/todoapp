import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm'; // 1. Import TaskForm

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Task App', completed: false },
    { id: 3, text: 'Deploy the App', completed: false },
  ]);

  // 2. Create the function to add a new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // Use a timestamp for a simple unique ID
      text: text,
      completed: false,
    };
    // Use the setTasks function to add the new task to the existing list
    setTasks([...tasks, newTask]);
  };

   const deleteTask = (idToDelete) => {
    // 2. Use setTasks with the filter method to create a new array
    setTasks(tasks.filter(task => task.id !== idToDelete));
  };

   const toggleTask = (idToToggle) => {
    setTasks(
      tasks.map(task =>
        // 2. If the task ID matches, create a new object with the toggled 'completed' value
        task.id === idToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <TaskForm onAddTask={addTask} />
      {/* 3. Pass the new function down to TaskList */}
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </div>
  );
}

export default App;