// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
