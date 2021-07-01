'use strict';
const server = require('../src/server');
const supertest = require('supertest');

const mockRequest = supertest(server.app);

describe('API server', () => {

  it('404 bad route', async () => {
    let route = '/foo';
    const response = await mockRequest.get(route);
    expect(response.status).toBe(404);
  });
  it('404 bad method', async () => {
    let route = '/';
    const response = await mockRequest.post(route);
    expect(response.status).toBe(404);
  });
  
  it('root route called', async () => {
    let route = '/';
    const response = await mockRequest.get(route);
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Hello From Sukina Class 03!');
  });

  it('food route called', async () => {
    let route = '/api/v1/food';
    const response = await mockRequest.get(route);
    expect(response.status).toBe(200);
    
  });

  it('clothes route called', async () => {
    let route = '/api/v1/clothes';
    const response = await mockRequest.get(route);
    expect(response.status).toBe(200);
  });

  it('clothes route called', async () => {
    let id='c702ef00-fd1e-4a98-a5a4-7b0f5a7df359';
    let route = `/api/v1/clothes/${id}`;
    const response = await mockRequest.get(route);
    expect(response.status).toBe(200);
  });
  it('clothes route called', async () => {
    let id='c702ef00-fd1e-4a98-a5a4-7b0f5a7df359';
    let route = `/api/v1/clothes/${id}`;
    const response = await mockRequest.delete(route);
    expect(response.status).toBe(200);
  });
  it('clothes route called', async () => {
    let id='c702ef00-fd1e-4a98-a5a4-7b0f5a7df359';
    let route = `/api/v1/clothes/${id}`;
    const response = await mockRequest.put(route);
    expect(response.status).toBe(200);
  });
  it('clothes route called', async () => {
    let route = '/api/v1/clothes';
    const response = await mockRequest.post(route);
    expect(response.status).toBe(200);
  });

});