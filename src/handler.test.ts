import * as Handler from './handler';

describe('Handler', () => {
  test('should return a 200 response', async () => {
    const result = await Handler.handler();

    expect(result.statusCode).toEqual(200);
  });
});
