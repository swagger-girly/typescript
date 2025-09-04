// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hello-world-testingggg-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import HelloWorldTestingggg from 'hello-world-testingggg';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/user/{username}',
  operationId: 'updateUser',
};

export const tool: Tool = {
  name: 'update_user',
  description: 'This can only be done by the logged in user.',
  inputSchema: {
    type: 'object',
    properties: {
      path_username: {
        type: 'string',
      },
      id: {
        type: 'integer',
      },
      email: {
        type: 'string',
      },
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      body_username: {
        type: 'string',
      },
      userStatus: {
        type: 'integer',
        description: 'User Status',
      },
    },
    required: ['path_username'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: HelloWorldTestingggg, args: Record<string, unknown> | undefined) => {
  const { username, ...body } = args as any;
  const response = await client.user.update(username, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
