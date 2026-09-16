// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhooksAPI from './webhooks';
import {
  ParsePetWebhookEvent,
  PetCreatedWebhookEvent,
  PetInventoryLowWebhookEvent,
  PetModerationWebhookEvent,
  PetUpdatedWebhookEvent,
  Webhooks,
} from './webhooks';

export class Notifications extends APIResource {
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Notifications.Webhooks = Webhooks;

export declare namespace Notifications {
  export {
    Webhooks as Webhooks,
    type PetCreatedWebhookEvent as PetCreatedWebhookEvent,
    type PetUpdatedWebhookEvent as PetUpdatedWebhookEvent,
    type PetInventoryLowWebhookEvent as PetInventoryLowWebhookEvent,
    type PetModerationWebhookEvent as PetModerationWebhookEvent,
    type ParsePetWebhookEvent as ParsePetWebhookEvent,
  };
}
