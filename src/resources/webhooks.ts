// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PetAPI from './pet/pet';
import * as ReportsAPI from './store/reports/reports';
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

export interface PetUpdatedWebhookEvent {
  changed_fields: Array<'name' | 'status' | 'category' | 'tags'>;

  pet: PetAPI.Pet;

  type: 'pet.updated';

  metadata?: { [key: string]: string };

  previous_status?: 'available' | 'pending' | 'sold' | null;
}

export interface PetInventoryLowWebhookEvent {
  pet: PetAPI.Pet;

  quantity: number;

  threshold: number;

  type: 'pet.inventory-low';

  last_order?: PetInventoryLowWebhookEvent.LastOrder;

  locations?: Array<PetInventoryLowWebhookEvent.Location>;
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
  }

  export interface Location {
    city?: string;

    state?: string;

    street?: string;

    zip?: string;
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

export interface StoreReportGeneratedWebhookEvent {
  id: string;

  created_at: string;

  metrics: unknown;

  report: ReportsAPI.Report;

  type: 'store.report.generated';
}

export type ParsedWebhookEvent =
  | PetCreatedWebhookEvent
  | PetUpdatedWebhookEvent
  | PetInventoryLowWebhookEvent
  | ParsedWebhookEvent.PetModerationApprovedEvent
  | ParsedWebhookEvent.PetModerationRejectedEvent
  | StoreReportGeneratedWebhookEvent;

export namespace ParsedWebhookEvent {
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
    type StoreReportGeneratedWebhookEvent as StoreReportGeneratedWebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}
