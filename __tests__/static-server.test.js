import request from 'supertest';
import { readFile } from 'fs/promises';
import app from '../lib/app.js';

describe('Routes for static-server', () => {
  it('should return index.html from url/', async () => {
    const [res, index] = await Promise.all([
      request(app).get('/'),
      readFile('./public/index.html', 'utf-8'),
    ]);
    expect(res.text).toEqual(index);
  });
});
