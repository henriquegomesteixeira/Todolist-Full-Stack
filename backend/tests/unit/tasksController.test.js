const sinon = require('sinon');
const tasksController = require('../../src/controllers/tasksController');
const tasksModel = require('../../src/models/tasksModel');

/*
  Optei por usar Sinon para verificar chamadas ao invés do expect do Chai
  porque o Sinon tem uma sintaxe mais simples para verificar se uma função
  foi chamada com os parâmetros corretos. Isso me permite explorar e aprender
  diferentes abordagens no processo de desenvolvimento, ampliando meu conhecimento
  em testes unitários. Ambas as ferramentas têm vantagens e aprender a usar
  várias opções pode enriquecer minha experiência em testes e ajudar a escolher
  a melhor abordagem para cada situação específica.
*/

describe('Test the task controller', () => {
  it('It must return all tasks and returns status 200', async () => {
    // Cria um stub para substituir a função getAll do tasksModel
    const stubGetAll = sinon.stub(tasksModel, 'getAll');
    const mockTasks = [{ id: 1, title: 'to cook', status: 'pending' }];
    // Configura o stub para retornar o mockTasks quando chamado
    stubGetAll.resolves(mockTasks);

    // Cria um objeto req e res para simular o comportamento de uma requisição
    const req = {};
    const res = {
      // Cria um stub para substituir a função status do res
      status: sinon.stub().returnsThis(),
      // Cria um spy para substituir a função json do res
      json: sinon.spy(),
    };

    await tasksController.getAll(req, res);

    // Verifica se a função getAll foi chamada uma vez
    sinon.assert.calledOnce(stubGetAll);
    // Verifica se a função status foi chamada com o parâmetro 200
    sinon.assert.calledWithExactly(res.status, 200);
    // Verifica se a função json foi chamada com o parâmetro mockTasks
    sinon.assert.calledWithExactly(res.json, mockTasks);

    stubGetAll.restore();
  });

  it('Should create a new task and return status 201', async () => {
    const stubCreateTask = sinon.stub(tasksModel, 'createTask');
    const mockCreatedTask = { id: 1, title: 'to cook', status: 'pending' };
    stubCreateTask.resolves(mockCreatedTask);

    const req = { body: { title: 'to cook' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await tasksController.createTask(req, res);

    sinon.assert.calledOnce(stubCreateTask);
    sinon.assert.calledWithExactly(res.status, 201);
    sinon.assert.calledWithExactly(res.json, mockCreatedTask);

    stubCreateTask.restore();
  });

  it('Must delete a task and return status 204', async () => {
    const stubDeleteTask = sinon.stub(tasksModel, 'deleteTask');
    // O affectedRows é o número de linhas afetadas pela query
    stubDeleteTask.resolves({ affectedRows: 1 });

    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await tasksController.deleteTask(req, res);

    sinon.assert.calledOnce(stubDeleteTask);
    sinon.assert.calledWithExactly(stubDeleteTask, req.params.id);
    sinon.assert.calledWithExactly(res.status, 204);
    sinon.assert.calledWithExactly(res.json);

    stubDeleteTask.restore();
  });

  it('Should update a task and return status 204', async () => {
    const stubUpdateTask = sinon.stub(tasksModel, 'updateTask');
    stubUpdateTask.resolves({ title: 'to cook', status: 'completed' });

    const req = { params: { id: 1 }, body: { title: 'to cook', status: 'completed' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await tasksController.updateTask(req, res);

    sinon.assert.calledOnce(stubUpdateTask);
    sinon.assert.calledWithExactly(stubUpdateTask, req.params.id, req.body);
    sinon.assert.calledWithExactly(res.status, 204);
    sinon.assert.calledWithExactly(res.json);

    stubUpdateTask.restore();
  });
});