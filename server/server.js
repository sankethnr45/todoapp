const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // 1. Import cors
const Task = require('./models/Task'); // 2. Import the Task model

const app = express();
const PORT = 5001;

// --- MIDDLEWARE ---
app.use(cors()); // 3. Use cors middleware
app.use(express.json()); // 4. Use express.json middleware

// 2. Add Mongoose connection logic
// Replace 'your_database_name' with a name for your database, e.g., 'taskmanager'
mongoose.connect('mongodb://localhost:27017/taskmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('MongoDB connection error:', err));


// GET all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST (create) a new task
app.post('/api/tasks', async (req, res) => {
  // Create a new Task instance based on the request body
  const task = new Task({
    text: req.body.text,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask); // 201 = Created successfully
  } catch (err) {
    res.status(400).json({ message: err.message }); // 400 = Bad Request
  }
});

// PUT (update) a task by ID
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Toggle the completed status
    task.completed = !task.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a task by ID
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});