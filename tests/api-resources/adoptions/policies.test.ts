// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HelloWorldTestingggg from 'hello-world-testingggg';

const client = new HelloWorldTestingggg({
  apiKey: 'My API Key',
  basicAuthUsername: 'My Basic Auth Username',
  basicAuthPassword: 'My Basic Auth Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource policies', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.adoptions.policies.create({
      name: 'name',
      rules: [{ attribute: 'PET_STATUS', operation: 'IS_ONE_OF' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.adoptions.policies.create({
      name: 'name',
      rules: [
        {
          attribute: 'PET_STATUS',
          operation: 'IS_ONE_OF',
          value: 'string',
        },
      ],
      escalation: {
        operator: 'ALL',
        groups: [],
        rules: [
          {
            attribute: 'PET_STATUS',
            operation: 'IS_ONE_OF',
            value: 'string',
          },
        ],
      },
      feeCap: { amount: 2500, currency: 'USD' },
      notificationTarget: 'string',
      regionalOverrides: { foo: 'string' },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.adoptions.policies.retrieve('policyId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.adoptions.policies.update('policyId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.adoptions.policies.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adoptions.policies.list({ cursor: 'cursor', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HelloWorldTestingggg.NotFoundError);
  });
});
