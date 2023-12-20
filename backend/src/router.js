const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

router.get('/', (_req, res) => {
  return res.status(200).json({ message: 'Welcome to the TODOLIST FULL-STACK API' });
});

router.get('/tasks', tasksController.getAll);

module.exports = router;