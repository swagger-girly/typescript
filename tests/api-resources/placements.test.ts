// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HelloWorldTestingggg from 'hello-world-testingggg';

const client = new HelloWorldTestingggg({
  apiKey: 'My API Key',
  basicAuthUsername: 'My Basic Auth Username',
  basicAuthPassword: 'My Basic Auth Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource placements', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.placements.create({ applicationId: 'applicationId' });
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
    const response = await client.placements.create({
      applicationId: 'applicationId',
      initialEvent: {
        id: 'id',
        leg: {
          location: {
            city: 'Palo Alto',
            geo: { latitude: 37.4443, longitude: -122.1598 },
            state: 'CA',
            street: '437 Lytton',
            zip: '94301',
          },
          contact: { name: 'name', phone: 'phone' },
          cost: { amount: 2500, currency: 'USD' },
          window: { end: '2019-12-27T18:11:19.117Z', start: '2019-12-27T18:11:19.117Z' },
        },
        occurredAt: '2019-12-27T18:11:19.117Z',
        type: 'transfer',
        note: 'note',
      },
      logistics: {
        delivery: {
          location: {
            city: 'Palo Alto',
            geo: { latitude: 37.4443, longitude: -122.1598 },
            state: 'CA',
            street: '437 Lytton',
            zip: '94301',
          },
          contact: { name: 'name', phone: 'phone' },
          cost: { amount: 2500, currency: 'USD' },
          window: { end: '2019-12-27T18:11:19.117Z', start: '2019-12-27T18:11:19.117Z' },
        },
        handler: {
          certification: {
            level: 'standard',
            audit: {
              recordedAt: '2019-12-27T18:11:19.117Z',
              recordedBy: 'recordedBy',
              source: 'manual',
            },
            issuedBy: 'issuedBy',
          },
          name: 'name',
        },
        pickup: {
          location: {
            city: 'Palo Alto',
            geo: { latitude: 37.4443, longitude: -122.1598 },
            state: 'CA',
            street: '437 Lytton',
            zip: '94301',
          },
          contact: { name: 'name', phone: 'phone' },
          cost: { amount: 2500, currency: 'USD' },
          window: { end: '2019-12-27T18:11:19.117Z', start: '2019-12-27T18:11:19.117Z' },
        },
      },
      scheduledFor: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.placements.retrieve('placementId');
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
    const responsePromise = client.placements.list();
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
      client.placements.list({ cursor: 'cursor', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HelloWorldTestingggg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('recordEvent: only required params', async () => {
    const responsePromise = client.placements.recordEvent('placementId', {
      id: 'id',
      leg: { location: {} },
      occurredAt: '2019-12-27T18:11:19.117Z',
      type: 'transfer',
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
  test.skip('recordEvent: required and optional params', async () => {
    const response = await client.placements.recordEvent('placementId', {
      id: 'id',
      leg: {
        location: {
          city: 'Palo Alto',
          geo: { latitude: 37.4443, longitude: -122.1598 },
          state: 'CA',
          street: '437 Lytton',
          zip: '94301',
        },
        contact: { name: 'name', phone: 'phone' },
        cost: { amount: 2500, currency: 'USD' },
        window: { end: '2019-12-27T18:11:19.117Z', start: '2019-12-27T18:11:19.117Z' },
      },
      occurredAt: '2019-12-27T18:11:19.117Z',
      type: 'transfer',
      note: 'note',
    });
  });
});
