// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hello-world-testingggg-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import HelloWorldTestingggg from 'hello-world-testingggg';

export const metadata: Metadata = {
  resource: 'pet',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/pet/{petId}',
  operationId: 'deletePet',
};

export const tool: Tool = {
  name: 'delete_pet',
  description: 'Deletes a pet',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
    },
    required: ['petId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: HelloWorldTestingggg, args: Record<string, unknown> | undefined) => {
  const { petId, ...body } = args as any;
  const response = await client.pet.delete(petId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
