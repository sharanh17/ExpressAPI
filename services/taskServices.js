// services/taskService.js

let tasks = [];

// Generate unique ID for tasks
function generateTaskId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const createTask = (title, description) => {
  const id = generateTaskId();
  const newTask = {
    id,
    title,
    description,
    status: 'pending'
  };
  tasks.push(newTask);
  return newTask;
};

const getAllTasks = () => {
  return tasks;
};

const updateTask = (id, title, description, status) => {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    return task;
  }
  return null;
};

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return true;
  }
  return false;
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask
};
