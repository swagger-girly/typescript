// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as PetAPI from '../pet/pet';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  parsePet(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): ParsePetWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookSecret : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as ParsePetWebhookEvent;
  }
}

export interface PetCreatedWebhookEvent {
  pet: PetAPI.Pet;

  type: 'pet.created';
}

export interface PetUpdatedWebhookEvent {
  changed_fields: Array<'name' | 'status' | 'category' | 'tags'>;

  pet: PetAPI.Pet;

  type: 'pet.updated';

  metadata?: { [key: string]: string };

  /**
   * pet status in the store
   */
  previous_status?: PetAPI.PetStatus | null;
}

export interface PetInventoryLowWebhookEvent {
  pet: PetAPI.Pet;

  quantity: number;

  threshold: number;

  type: 'pet.inventory-low';

  last_order?: PetInventoryLowWebhookEvent.LastOrder;

  locations?: Array<Shared.Address>;
}

export namespace PetInventoryLowWebhookEvent {
  export interface LastOrder {
    id?: number;

    complete?: boolean;

    petId?: number;

    quantity?: number;

    shipDate?: string;

    /**
     * Order Status
     */
    status?: 'placed' | 'approved' | 'delivered';

    total?: Shared.Money;
  }
}

export type PetModerationWebhookEvent =
  | PetModerationWebhookEvent.PetModerationApprovedEvent
  | PetModerationWebhookEvent.PetModerationRejectedEvent;

export namespace PetModerationWebhookEvent {
  export interface PetModerationApprovedEvent {
    approved_at: string;

    pet: PetAPI.Pet;

    type: 'pet.moderation.approved';
  }

  export interface PetModerationRejectedEvent {
    pet: PetAPI.Pet;

    reason: 'policy_violation' | 'duplicate' | 'unsafe-content';

    type: 'pet.moderation.rejected';

    review_notes?: Array<PetModerationRejectedEvent.ReviewNote>;
  }

  export namespace PetModerationRejectedEvent {
    export interface ReviewNote {
      message: string;

      reviewer?: ReviewNote.Reviewer;
    }

    export namespace ReviewNote {
      export interface Reviewer {
        id?: number;

        email?: string;

        firstName?: string;

        lastName?: string;

        password?: string;

        phone?: string;

        username?: string;

        /**
         * User Status
         */
        userStatus?: number;
      }
    }
  }
}

export type ParsePetWebhookEvent =
  | PetCreatedWebhookEvent
  | PetUpdatedWebhookEvent
  | PetInventoryLowWebhookEvent
  | ParsePetWebhookEvent.PetModerationApprovedEvent
  | ParsePetWebhookEvent.PetModerationRejectedEvent;

export namespace ParsePetWebhookEvent {
  export interface PetModerationApprovedEvent {
    approved_at: string;

    pet: PetAPI.Pet;

    type: 'pet.moderation.approved';
  }

  export interface PetModerationRejectedEvent {
    pet: PetAPI.Pet;

    reason: 'policy_violation' | 'duplicate' | 'unsafe-content';

    type: 'pet.moderation.rejected';

    review_notes?: Array<PetModerationRejectedEvent.ReviewNote>;
  }

  export namespace PetModerationRejectedEvent {
    export interface ReviewNote {
      message: string;

      reviewer?: ReviewNote.Reviewer;
    }

    export namespace ReviewNote {
      export interface Reviewer {
        id?: number;

        email?: string;

        firstName?: string;

        lastName?: string;

        password?: string;

        phone?: string;

        username?: string;

        /**
         * User Status
         */
        userStatus?: number;
      }
    }
  }
}

export declare namespace Webhooks {
  export {
    type PetCreatedWebhookEvent as PetCreatedWebhookEvent,
    type PetUpdatedWebhookEvent as PetUpdatedWebhookEvent,
    type PetInventoryLowWebhookEvent as PetInventoryLowWebhookEvent,
    type PetModerationWebhookEvent as PetModerationWebhookEvent,
    type ParsePetWebhookEvent as ParsePetWebhookEvent,
  };
}
