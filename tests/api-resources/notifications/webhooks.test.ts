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
  test.skip('parsePet', () => {
    const key = 'whsec_c2VjcmV0Cg==';
    const payload =
      '{"pet":{"name":"doggie","photoUrls":["string"],"id":10,"acquisitionChannel":"breeder","category":{"id":1,"name":"Dogs","subcategories":[]},"microchipId":"string","status":"available","tags":[{"id":0,"name":"name"}]},"type":"pet.created"}';
    const msgID = '1';
    const timestamp = new Date();
    const wh = new Webhook('whsec_c2VjcmV0Cg==');
    const signature = wh.sign(msgID, timestamp, payload);
    const headers: Record<string, string> = {
      'webhook-signature': signature,
      'webhook-id': msgID,
      'webhook-timestamp': String(Math.floor(timestamp.getTime() / 1000)),
    };
    client.notifications.webhooks.parsePet(payload, { headers, key });
    client.withOptions({ webhookSecret: key }).notifications.webhooks.parsePet(payload, { headers });
    client
      .withOptions({ webhookSecret: 'whsec_aaaaaaaaaa==' })
      .notifications.webhooks.parsePet(payload, { headers, key });
    expect(() => {
      const wrongKey = 'whsec_aaaaaaaaaa==';
      client.notifications.webhooks.parsePet(payload, { headers, key: wrongKey });
    }).toThrow('No matching signature found');
    expect(() => {
      const wrongKey = 'whsec_aaaaaaaaaa==';
      client.withOptions({ webhookSecret: wrongKey }).notifications.webhooks.parsePet(payload, { headers });
    }).toThrow('No matching signature found');
    expect(() => {
      const badSig = wh.sign(msgID, timestamp, 'some other payload');
      client.notifications.webhooks.parsePet(payload, {
        headers: { ...headers, 'webhook-signature': badSig },
        key,
      });
    }).toThrow('No matching signature found');
    expect(() => {
      const badSig = wh.sign(msgID, timestamp, 'some other payload');
      client
        .withOptions({ webhookSecret: key })
        .notifications.webhooks.parsePet(payload, { headers: { ...headers, 'webhook-signature': badSig } });
    }).toThrow('No matching signature found');
    expect(() => {
      client.notifications.webhooks.parsePet(payload, {
        headers: { ...headers, 'webhook-timestamp': '5' },
        key,
      });
    }).toThrow('Message timestamp too old');
    expect(() => {
      client
        .withOptions({ webhookSecret: key })
        .notifications.webhooks.parsePet(payload, { headers: { ...headers, 'webhook-timestamp': '5' } });
    }).toThrow('Message timestamp too old');
    expect(() => {
      client.notifications.webhooks.parsePet(payload, {
        headers: { ...headers, 'webhook-id': 'wrong' },
        key,
      });
    }).toThrow('No matching signature found');
    expect(() => {
      client
        .withOptions({ webhookSecret: key })
        .notifications.webhooks.parsePet(payload, { headers: { ...headers, 'webhook-id': 'wrong' } });
    }).toThrow('No matching signature found');
  });
});
