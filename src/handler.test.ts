import * as Handler from './handler';

test('Handler is a handler', async () => {
  const result = await Handler.handler();

  expect(result.statusCode).toEqual(200);
});
