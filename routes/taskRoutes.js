const express = require('express');
const router = express.Router();
const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
} = require('../controllers/taskController.js');

// Define routes
router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;