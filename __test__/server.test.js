'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  it('Handles the root path', async () => {
    const res = await mockRequest.get('/');

    expect(res.status).toBe(200);
    expect(res.text).toBeTruthy;
  });

  test('handles the success route', async () => {
    const res = await mockRequest.get('/success');
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Success!!');
  });

  test('handles bad request', async () => {
    const res = await mockRequest.get('/bad');
    expect(res.status).toEqual(500);
  });

  test('handles not found', async () => {
    const res = await mockRequest.get('/foo');
    expect(res.status).toEqual(404);
  });

});


