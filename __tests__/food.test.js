'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelizeDB } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDB.sync();
});

afterAll(async () => {
  await sequelizeDB.drop();
});

describe('REST API', () => {
  it('creates food item', async () => {
    const response = await request.post('/food').send({
      name: 'test',
      type: 'test',
    });

    expect(response.body.name).toEqual('test');
  });

  it('gets all food items', async () => {
    const response = await request.get('/food');

    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].name).toEqual('test');
  });

  it('gets food item by id', async () => {
    const response = await request.get('/food/1');

    expect(response.body.name).toEqual('test');
  });

  it('updates food item by id', async () => {
    const response = await request.put('/food/1').send({
      name: 'newtest',
      type: 'newtest',
    });
    expect(response.status).toBe(200);
  });

  it('deletes food item by id', async () => {
    const response = await request.delete('/food/1');

    expect(response.status).toEqual(200);
  });

});

