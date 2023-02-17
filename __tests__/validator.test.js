'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('validator', () => {
  it('should verify a valid name', async () => {
    const response = await request.get('/person').query({ name: 'John Doe' });
    expect(response.status).toBe(200);
  });

  it('should verify if no name', async () => {
    const response = await request.get('/person').query({ name: '' });
    expect(response.status).toBe(500);
  });
});

