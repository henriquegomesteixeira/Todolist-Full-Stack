const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../src/models/connection');
const tasksModel = require('../../src/models/tasksModel');

/*
  Neste teste usei Chai para verificar o resultado das funções e Sinon para
  verificar se a função execute do connection foi chamada com os parâmetros
  corretos. Isso me permite explorar e aprender diferentes abordagens no
  processo de desenvolvimento, ampliando meu conhecimento em testes unitários.
*/

// Mock de conexão para simular o comportamento do connection
const mockConnection = {
  execute: sinon.stub(connection, 'execute'),
};

describe('Test the task model', function() {
  // Reseta o histórico de chamadas para cada teste
  afterEach(() => {
    mockConnection.execute.resetHistory();
  });

  it('Must return an array with all tasks', async () => {
    const mockTasks = [{ id: 1, title: 'to cook', status: 'pending' }];
    mockConnection.execute.resolves([mockTasks]);

    const result = await tasksModel.getAll();

    sinon.assert.calledOnce(mockConnection.execute);
    expect(result).to.deep.equal(mockTasks);
  });

  it('You must create a new task', async () => {
    const mockInsertedTask = { insertId: 1 };
    const mockTask = [{ title: 'to cook' }];
    mockConnection.execute.resolves([mockInsertedTask]);

    const result = await tasksModel.createTask(mockTask);

    sinon.assert.calledOnce(mockConnection.execute);
    expect(result).to.deep.equal(mockInsertedTask);
  });

  it('Must delete a task', async () => {
    const taskId = 1;
    const mockStatusTask = { status: 204 };
    mockConnection.execute.resolves(mockStatusTask);

    const result = await tasksModel.deleteTask(taskId);

    sinon.assert.calledOnce(mockConnection.execute);
    expect(result).to.deep.equal(mockStatusTask);
  });

  it('Must update a task', async () => {
    const taskId = 1;
    const updateTask = { title: 'to cook', status: 'completed' };
    const mockUpdatedTaskResult = { affectedRows: 1 };
    mockConnection.execute.resolves([mockUpdatedTaskResult]);

    const result = await tasksModel.updateTask(taskId, updateTask);
    // Verifica se a função foi chamada com os parâmetros corretos
    sinon.assert.calledWith(
      mockConnection.execute,
      'UPDATE tasks SET title = ?, status = ? WHERE id = ?',
      [updateTask.title, updateTask.status, taskId]
    );
  
    sinon.assert.calledOnce(mockConnection.execute);
    expect(result).to.deep.equal(mockUpdatedTaskResult);
  });
});