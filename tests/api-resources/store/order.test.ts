// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HelloWorldTestingggg from 'hello-world-testingggg';

const client = new HelloWorldTestingggg({
  apiKey: 'My API Key',
  basicAuthUsername: 'My Basic Auth Username',
  basicAuthPassword: 'My Basic Auth Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource order', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.store.order.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.store.order.create(
        {
          id: 10,
          complete: true,
          petId: 198772,
          quantity: 7,
          relatedAddress: {
            city: 'Palo Alto',
            geo: { latitude: 37.4443, longitude: -122.1598 },
            relatedCategory: {},
            relatedCustomer: {},
            relatedMoney: {
              amount: 2500,
              currency: 'USD',
              relatedCategory: {},
              relatedCustomer: {},
              relatedOrder: {},
              relatedPet: {
                name: 'doggie',
                photoUrls: ['string'],
                id: 10,
                acquisitionChannel: 'breeder',
                category: {},
                microchipId: 'string',
                relatedCategory: {},
                relatedCustomer: {},
                relatedOrder: {},
                relatedShelter: {},
                relatedUser: {},
                status: 'available',
                tags: [{}],
              },
              relatedShelter: {},
              relatedTag: {},
              relatedUser: {},
            },
            relatedOrder: {},
            relatedPet: {
              name: 'doggie',
              photoUrls: ['string'],
              id: 10,
              acquisitionChannel: 'breeder',
              category: {},
              microchipId: 'string',
              relatedCategory: {},
              relatedCustomer: {},
              relatedOrder: {},
              relatedShelter: {},
              relatedUser: {},
              status: 'available',
              tags: [{}],
            },
            relatedShelter: {},
            relatedTag: {},
            relatedUser: {},
            state: 'CA',
            street: '437 Lytton',
            zip: '94301',
          },
          relatedCategory: {},
          relatedCustomer: {},
          relatedMoney: {
            amount: 2500,
            currency: 'USD',
            relatedAddress: {
              city: 'Palo Alto',
              geo: { latitude: 37.4443, longitude: -122.1598 },
              relatedCategory: {},
              relatedCustomer: {},
              relatedOrder: {},
              relatedPet: {
                name: 'doggie',
                photoUrls: ['string'],
                id: 10,
                acquisitionChannel: 'breeder',
                category: {},
                microchipId: 'string',
                relatedCategory: {},
                relatedCustomer: {},
                relatedOrder: {},
                relatedShelter: {},
                relatedUser: {},
                status: 'available',
                tags: [{}],
              },
              relatedShelter: {},
              relatedTag: {},
              relatedUser: {},
              state: 'CA',
              street: '437 Lytton',
              zip: '94301',
            },
            relatedCategory: {},
            relatedCustomer: {},
            relatedOrder: {},
            relatedPet: {
              name: 'doggie',
              photoUrls: ['string'],
              id: 10,
              acquisitionChannel: 'breeder',
              category: {},
              microchipId: 'string',
              relatedCategory: {},
              relatedCustomer: {},
              relatedOrder: {},
              relatedShelter: {},
              relatedUser: {},
              status: 'available',
              tags: [{}],
            },
            relatedShelter: {},
            relatedTag: {},
            relatedUser: {},
          },
          relatedPet: {
            name: 'doggie',
            photoUrls: ['string'],
            id: 10,
            acquisitionChannel: 'breeder',
            category: {},
            microchipId: 'string',
            relatedAddress: {
              city: 'Palo Alto',
              geo: { latitude: 37.4443, longitude: -122.1598 },
              relatedCategory: {},
              relatedCustomer: {},
              relatedMoney: {
                amount: 2500,
                currency: 'USD',
                relatedCategory: {},
                relatedCustomer: {},
                relatedOrder: {},
                relatedShelter: {},
                relatedTag: {},
                relatedUser: {},
              },
              relatedOrder: {},
              relatedShelter: {},
              relatedTag: {},
              relatedUser: {},
              state: 'CA',
              street: '437 Lytton',
              zip: '94301',
            },
            relatedCategory: {},
            relatedCustomer: {},
            relatedMoney: {
              amount: 2500,
              currency: 'USD',
              relatedCategory: {},
              relatedCustomer: {},
              relatedOrder: {},
              relatedShelter: {},
              relatedTag: {},
              relatedUser: {},
            },
            relatedOrder: {},
            relatedShelter: {},
            relatedUser: {},
            status: 'available',
            tags: [{}],
          },
          relatedShelter: {},
          relatedTag: {},
          relatedUser: {},
          shipDate: '2019-12-27T18:11:19.117Z',
          status: 'approved',
          total: {
            amount: 2500,
            currency: 'USD',
            relatedAddress: {
              city: 'Palo Alto',
              geo: { latitude: 37.4443, longitude: -122.1598 },
              relatedCategory: {},
              relatedCustomer: {},
              relatedOrder: {},
              relatedPet: {
                name: 'doggie',
                photoUrls: ['string'],
                id: 10,
                acquisitionChannel: 'breeder',
                category: {},
                microchipId: 'string',
                relatedCategory: {},
                relatedCustomer: {},
                relatedOrder: {},
                relatedShelter: {},
                relatedUser: {},
                status: 'available',
                tags: [{}],
              },
              relatedShelter: {},
              relatedTag: {},
              relatedUser: {},
              state: 'CA',
              street: '437 Lytton',
              zip: '94301',
            },
            relatedCategory: {},
            relatedCustomer: {},
            relatedOrder: {},
            relatedPet: {
              name: 'doggie',
              photoUrls: ['string'],
              id: 10,
              acquisitionChannel: 'breeder',
              category: {},
              microchipId: 'string',
              relatedCategory: {},
              relatedCustomer: {},
              relatedOrder: {},
              relatedShelter: {},
              relatedUser: {},
              status: 'available',
              tags: [{}],
            },
            relatedShelter: {},
            relatedTag: {},
            relatedUser: {},
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HelloWorldTestingggg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.store.order.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.store.order.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
