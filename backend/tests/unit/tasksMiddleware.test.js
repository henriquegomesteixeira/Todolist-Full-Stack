const { expect } = require('chai');
const tasksMiddleware = require('../../src/middlewares/tasksMiddleware');

describe('Testing middleware validations', () => {
  it('Should return an error if the "title" field is missing', () => {
    const req = { body: {} };
    const res = {
      status: function (statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };
    const next = () => {};

    tasksMiddleware.validateFieldTitle(req, res, next);

    expect(res.statusCode).to.equal(400);
    expect(res.body).to.deep.equal({ message: 'The "title" field is mandatory' });
  });

  it('Should return an error if the "title" field is empty', () => {
    const req = { body: { title: '' } };
    const res = {
      status: function (statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };
    const next = () => {};

    tasksMiddleware.validateFieldTitle(req, res, next);

    expect(res.statusCode).to.equal(400);
    expect(res.body).to.deep.equal({ message: 'Title cannot be empty' });
  });

  it('Must call next() if the "title" field is present and filled in', () => {
    const req = { body: { title: 'to cook' } };
    const res = {
      status: function (statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };
    let nextCalled = false;
    const next = () => {
      nextCalled = true;
    };
  
    tasksMiddleware.validateFieldTitle(req, res, next);
  
    expect(nextCalled).to.be.true;
  });

  it('Should return an error if the "status" field is missing', () => {
    const req = { body: {} };
    const res = {
      status: function (statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };
    const next = () => {};

    tasksMiddleware.validadeFieldStatus(req, res, next);

    expect(res.statusCode).to.equal(400);
    expect(res.body).to.deep.equal({ message: 'The "status" field is mandatory' });
  });

  it('Should return an error if the "status" field is empty', () => {
    const req = { body: { status: '' } };
    const res = {
      status: function (statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };
    const next = () => {};

    tasksMiddleware.validadeFieldStatus(req, res, next);

    expect(res.statusCode).to.equal(400);
    expect(res.body).to.deep.equal({ message: 'Status cannot be empty' });
  });

  it('Must call next() if the "status" field is present and filled in', () => {
    const req = { body: { status: 'completed' } };
    const res = {
      status: function (statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      json: function (data) {
        this.body = data;
      },
    };
    let nextCalled = false;
    const next = () => {
      nextCalled = true;
    };
  
    tasksMiddleware.validadeFieldStatus(req, res, next);
  
    expect(nextCalled).to.be.true;
  });
});