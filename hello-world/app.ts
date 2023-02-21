import { APIGatewayProxyHandler } from 'aws-lambda';
import { getRandomFortuneQuote, getRandomNumberFact } from './utils';
import 'dotenv/config';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      _metadata: {
        method: event.httpMethod,
        path: event.path,
        requestId: context.awsRequestId,
      },
      fortune: await getRandomFortuneQuote(),
      fact: await getRandomNumberFact(),
    }),
  };
};
