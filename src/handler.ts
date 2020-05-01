import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// Services
import { ApiResponseService } from './services/api-response.service';

export async function handler(
  event?: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return ApiResponseService.result(200, {
    message: 'Wahooo, an API response!!!',
    input: event,
  });
}
