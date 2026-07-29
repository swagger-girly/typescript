// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Webhook } from 'standardwebhooks';

import HelloWorldTestingggg from 'hello-world-testingggg';

const client = new HelloWorldTestingggg({
  apiKey: 'My API Key',
  basicAuthUsername: 'My Basic Auth Username',
  basicAuthPassword: 'My Basic Auth Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  test.skip('parsed', () => {
    const key = 'whsec_c2VjcmV0Cg==';
    const payload =
      '{"pet":{"name":"doggie","photoUrls":["string"],"id":10,"acquisitionChannel":"breeder","category":{},"microchipId":"string","relatedAddress":{"city":"Palo Alto","geo":{"latitude":37.4443,"longitude":-122.1598},"relatedCategory":{},"relatedCustomer":{},"relatedMoney":{"amount":2500,"currency":"USD","relatedCategory":{},"relatedCustomer":{},"relatedOrder":{},"relatedShelter":{},"relatedTag":{},"relatedUser":{}},"relatedOrder":{},"relatedShelter":{},"relatedTag":{},"relatedUser":{},"state":"CA","street":"437 Lytton","zip":"94301"},"relatedCategory":{},"relatedCustomer":{},"relatedMoney":{"amount":2500,"currency":"USD","relatedCategory":{},"relatedCustomer":{},"relatedOrder":{},"relatedShelter":{},"relatedTag":{},"relatedUser":{}},"relatedOrder":{},"relatedShelter":{},"relatedUser":{},"status":"available","tags":[{}]},"type":"pet.created"}';
    const msgID = '1';
    const timestamp = new Date();
    const wh = new Webhook('whsec_c2VjcmV0Cg==');
    const signature = wh.sign(msgID, timestamp, payload);
    const headers: Record<string, string> = {
      'webhook-signature': signature,
      'webhook-id': msgID,
      'webhook-timestamp': String(Math.floor(timestamp.getTime() / 1000)),
    };
    client.webhooks.parsed(payload, { headers, key });
    client.withOptions({ webhookSecret: key }).webhooks.parsed(payload, { headers });
    client.withOptions({ webhookSecret: 'whsec_aaaaaaaaaa==' }).webhooks.parsed(payload, { headers, key });
    expect(() => {
      const wrongKey = 'whsec_aaaaaaaaaa==';
      client.webhooks.parsed(payload, { headers, key: wrongKey });
    }).toThrow('No matching signature found');
    expect(() => {
      const wrongKey = 'whsec_aaaaaaaaaa==';
      client.withOptions({ webhookSecret: wrongKey }).webhooks.parsed(payload, { headers });
    }).toThrow('No matching signature found');
    expect(() => {
      const badSig = wh.sign(msgID, timestamp, 'some other payload');
      client.webhooks.parsed(payload, { headers: { ...headers, 'webhook-signature': badSig }, key });
    }).toThrow('No matching signature found');
    expect(() => {
      const badSig = wh.sign(msgID, timestamp, 'some other payload');
      client
        .withOptions({ webhookSecret: key })
        .webhooks.parsed(payload, { headers: { ...headers, 'webhook-signature': badSig } });
    }).toThrow('No matching signature found');
    expect(() => {
      client.webhooks.parsed(payload, { headers: { ...headers, 'webhook-timestamp': '5' }, key });
    }).toThrow('Message timestamp too old');
    expect(() => {
      client
        .withOptions({ webhookSecret: key })
        .webhooks.parsed(payload, { headers: { ...headers, 'webhook-timestamp': '5' } });
    }).toThrow('Message timestamp too old');
    expect(() => {
      client.webhooks.parsed(payload, { headers: { ...headers, 'webhook-id': 'wrong' }, key });
    }).toThrow('No matching signature found');
    expect(() => {
      client
        .withOptions({ webhookSecret: key })
        .webhooks.parsed(payload, { headers: { ...headers, 'webhook-id': 'wrong' } });
    }).toThrow('No matching signature found');
  });
});
