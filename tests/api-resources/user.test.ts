// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HelloWorldTestingggg from 'hello-world-testingggg';

const client = new HelloWorldTestingggg({
  apiKey: 'My API Key',
  basicAuthUsername: 'My Basic Auth Username',
  basicAuthPassword: 'My Basic Auth Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource user', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.user.create();
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
      client.user.create(
        {
          id: 10,
          email: 'john@email.com',
          firstName: 'John',
          lastName: 'James',
          password: '12345',
          phone: '12345',
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
          relatedOrder: {},
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
          username: 'theUser',
          userStatus: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HelloWorldTestingggg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.user.retrieve('username');
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
    const responsePromise = client.user.update('username');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.update(
        'username',
        {
          id: 10,
          email: 'john@email.com',
          firstName: 'John',
          lastName: 'James',
          password: '12345',
          phone: '12345',
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
          relatedOrder: {},
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
          username: 'theUser',
          userStatus: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HelloWorldTestingggg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.user.delete('username');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createWithList', async () => {
    const responsePromise = client.user.createWithList();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createWithList: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.createWithList(
        {
          body: [
            {
              id: 10,
              email: 'john@email.com',
              firstName: 'John',
              lastName: 'James',
              password: '12345',
              phone: '12345',
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
              username: 'theUser',
              userStatus: 1,
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HelloWorldTestingggg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('login', async () => {
    const responsePromise = client.user.login();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('login: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.login({ password: 'password', username: 'username' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HelloWorldTestingggg.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('logout', async () => {
    const responsePromise = client.user.logout();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verifyIdentity', async () => {
    const responsePromise = client.user.verifyIdentity('username');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
