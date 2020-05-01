import { ApiResponseService } from './api-response.service';

describe('result()', () => {
  let body: any;

  beforeEach(() => {
    body = { data: 'something' };
  });

  it('should return a 200 response with a body', () => {
    const result = ApiResponseService.result(200, body);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(JSON.stringify(body));
  });

  it('should return a 200 response with content-type of text/plain', () => {
    const stringBody = 'this a string';
    const result = ApiResponseService.result(200, stringBody);

    expect(result.headers['Content-Type']).toEqual('text/plain');
  });

  it('should return a 200 response with content-type of application/json', () => {
    const result = ApiResponseService.result(200, body);

    expect(result.headers['Content-Type']).toEqual('application/json');
  });

  it('should return a 400 response with an error', () => {
    const result = ApiResponseService.result(
      400,
      body,
      'This is an error message'
    );

    expect(result.body).toEqual(
      JSON.stringify({ error: 'This is an error message' })
    );
  });
});

describe('attachHeaders', () => {
  it('should return the correct headers - content-type is application/json', () => {
    const result = (<any>ApiResponseService).attachHeaders(false);

    expect(result['Content-Type']).toEqual('application/json');
  });

  it('should return the correct headers - content-type is text/plain', () => {
    const result = (<any>ApiResponseService).attachHeaders(true);

    expect(result['Content-Type']).toEqual('text/plain');
  });
});
