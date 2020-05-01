import { APIGatewayProxyResult } from 'aws-lambda';

export abstract class ApiResponseService {
  static CONTENT_TYPE_TEXT = 'text/plain';
  static CONTENT_TYPE_JSON = 'application/json';

  /**
   * Get the structured response
   *
   * @static
   * @param {number} statusCode
   * @param {*} [body]
   * @param {string} [error]
   * @returns {APIGatewayProxyResult}
   * @memberof ApiResponseService
   */
  static result(
    statusCode: number,
    body?: any,
    error?: string
  ): APIGatewayProxyResult {
    const contentIsString = typeof body === 'string';
    body = error ? { error } : body;
    return {
      statusCode,
      body: contentIsString ? body : JSON.stringify(body),
      headers: this.attachHeaders(contentIsString),
    };
  }

  /**
   * Attaches the headers to the response
   *
   * @static
   * @returns
   * @memberof ApiResponseService
   */
  private static attachHeaders(contentIsString: boolean) {
    return {
      'X-Content-Type-Options': 'nosniff',
      'Content-Type': contentIsString
        ? this.CONTENT_TYPE_TEXT
        : this.CONTENT_TYPE_JSON,
      'Access-Control-Allow-Origin': process.env.CORS_ORIGIN,
      'Access-Control-Allow-Credentials': true,
    };
  }
}
