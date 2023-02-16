'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('API Server', () => {
  test('should handle invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  // test('should handle valid requests', async () => {
  //   const response = await request.get('/');
  //   expect(response.status).toEqual(200);
  // });

  test('should handle bad methods', async () => {
    const response = await request.put('/foo');
    expect(response.status).toEqual(404);
  });

  test('should return correct output object', async () => {
    const response = await request.get('/person?name=Joe');
    expect(response.body).toEqual( { name: 'Joe' } );
  });
});

