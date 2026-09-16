// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HelloWorldTestingggg from 'hello-world-testingggg';

const client = new HelloWorldTestingggg({
  apiKey: 'My API Key',
  basicAuthUsername: 'My Basic Auth Username',
  basicAuthPassword: 'My Basic Auth Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ai', () => {
  // Mock server tests are disabled
  test.skip('aiQuery: only required params', async () => {
    const responsePromise = client.ai.aiQuery({
      data_to_extract: [{ datapoint_name: 'datapoint_name' }],
      domain: 'domain',
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
  test.skip('aiQuery: required and optional params', async () => {
    const response = await client.ai.aiQuery({
      data_to_extract: [{ datapoint_name: 'datapoint_name', datapoint_type: 'text' }],
      domain: 'domain',
      authentication_3ds: {
        challenge_rules: [{ challenge_kind: 'challenge_kind' }],
        fallback_check: [{ check_name: 'check_name' }],
      },
      datapoint_object_schema: { foo: 'string' },
      extraction_rules: [{ rule_name: 'rule_name', rule_severity: 'low' }],
    });
  });
});
