// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hello-world-testingggg-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import HelloWorldTestingggg from 'hello-world-testingggg';

export const metadata: Metadata = {
  resource: 'pet',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/pet/{petId}',
  operationId: 'updatePetWithForm',
};

export const tool: Tool = {
  name: 'update_with_form_pet',
  description: 'Updates a pet in the store with form data',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
      name: {
        type: 'string',
        description: 'Name of pet that needs to be updated',
      },
      status: {
        type: 'string',
        description: 'Status of pet that needs to be updated',
      },
    },
    required: ['petId'],
  },
  annotations: {},
};

export const handler = async (client: HelloWorldTestingggg, args: Record<string, unknown> | undefined) => {
  const { petId, ...body } = args as any;
  const response = await client.pet.updateWithForm(petId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
