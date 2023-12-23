// Arquivo responsável por validar os campos de entrada da rota de tarefas

const validateFieldTitle = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: 'The "title" field is mandatory' });
  }

  if (body.title === '') {
    return res.status(400).json({ message: 'Title cannot be empty' });
  }

  next();
};

const validadeFieldStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: 'The "status" field is mandatory' });
  }

  if (body.status === '') {
    return res.status(400).json({ message: 'Status cannot be empty' });
  }

  next();
};

module.exports = {
  validateFieldTitle,
  validadeFieldStatus,
};
