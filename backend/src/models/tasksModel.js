const connection = require('./connection');

// Busca todas as tarefas do banco
const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

// Cria uma nova tarefa no banco
const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toISOString();
  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';

  const [createdTask] = await connection.execute(query, [title, 'pending', dateUTC]);
  return { insertId: createdTask.insertId };
};

// Deleta uma tarefa do banco
const deleteTask = async (id) => {
  const query = 'DELETE FROM tasks WHERE id = ?';

  const removeTask = await connection.execute(query, [id]);
  return removeTask;
};

// Atualiza uma tarefa do banco
const updateTask = async (id, task) => {
  const { title, status } = task;
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

  const [updateTask] = await connection.execute(query, [title, status, id]);
  return updateTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};