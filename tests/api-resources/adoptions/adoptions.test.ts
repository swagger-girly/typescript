// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HelloWorldTestingggg from 'hello-world-testingggg';

const client = new HelloWorldTestingggg({
  apiKey: 'My API Key',
  basicAuthUsername: 'My Basic Auth Username',
  basicAuthPassword: 'My Basic Auth Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource adoptions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.adoptions.create({ applicant_type: 'individual', name: 'name' });
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
    const response = await client.adoptions.create({
      applicant_type: 'individual',
      name: 'name',
      address: {
        city: 'Palo Alto',
        geo: { latitude: 37.4443, longitude: -122.1598 },
        state: 'CA',
        street: '437 Lytton',
        zip: '94301',
      },
      age: 0,
      email: 'email',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.adoptions.retrieve('applicationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveDecision', async () => {
    const responsePromise = client.adoptions.retrieveDecision('applicationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
