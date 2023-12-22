const express = require('express');
const tasksController = require('./controllers/tasksController');
const taskMiddleware = require('./middlewares/taskMiddleware');

const router = express.Router();

router.get('/', (_req, res) => {
  return res.status(200).json({ message: 'Welcome to the TODOLIST FULL-STACK API' });
});

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
  taskMiddleware.validateFieldTitle,
  taskMiddleware.validadeFieldStatus,
  tasksController.updateTask
);

module.exports = router;