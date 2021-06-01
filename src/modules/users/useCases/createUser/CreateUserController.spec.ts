import request from 'supertest';

import { app } from '../../../../app';

describe('[Integration] Create Category Controller', () => {
  it('should be able to create a new user', async () => {
    const user = await request(app).post('/users').send({
      name: 'User test',
      email: 'user@email.com',
      password: '123'
    });

    expect(user.status).toBe(201);
  });
});
