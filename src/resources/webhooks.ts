// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PetAPI from './pet/pet';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  parsed(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): ParsedWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookSecret : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as ParsedWebhookEvent;
  }
}

export interface PetCreatedWebhookEvent {
  pet: PetAPI.Pet;

  type: 'pet.created';
}

export interface ParsedWebhookEvent {
  pet: PetAPI.Pet;

  type: 'pet.created';
}

export declare namespace Webhooks {
  export {
    type PetCreatedWebhookEvent as PetCreatedWebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}
