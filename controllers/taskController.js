// controllers/taskController.js

const taskService = require('../services/taskServices');

const createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }
  const newTask = taskService.createTask(title, description);
  res.status(201).json(newTask);
};

const getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = taskService.updateTask(id, title, description, status);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const success = taskService.deleteTask(id);
  if (success) {
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask
};
