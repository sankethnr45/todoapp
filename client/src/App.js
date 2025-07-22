import React, { useState, useEffect } from 'react'; // 1. Import useEffect
import axios from 'axios'; // 2. Import axios
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

// Define the base URL for our API
const API_URL = 'http://localhost:5001/api/tasks';

function App() {
  // Start with an empty array. Data will come from the API.
  const [tasks, setTasks] = useState([]);

  // 3. useEffect to fetch tasks when the app loads
  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get(API_URL);
        setTasks(res.data);
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    };
    getTasks();
  }, []); // The empty array [] means this effect runs only once on mount

  // 4. Update addTask to use the API
  const addTask = async (text) => {
    try {
      const res = await axios.post(API_URL, { text: text });
      // Add the new task returned from the server to our state
      setTasks([...tasks, res.data]);
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  // 5. Update deleteTask to use the API
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Filter out the deleted task from our state
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  // 6. Update toggleTask to use the API
  const toggleTask = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`);
      // Update the specific task in our state
      setTasks(
        tasks.map(task =>
          task._id === id ? res.data : task
        )
      );
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  return (
    <div className="App">
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </div>
  );
}

export default App;