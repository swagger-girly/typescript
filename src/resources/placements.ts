// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PlacementsAPI from './placements';
import * as Shared from './shared';
import * as VeterinaryAPI from './veterinary';
import * as AdoptionsAPI from './adoptions/adoptions';
import { APIPromise } from '../core/api-promise';
import { CustomCursorPage, type CustomCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Post-adoption placement tracking
 */
export class Placements extends APIResource {
  /**
   * Creates a placement for an approved adoption application.
   */
  create(body: PlacementCreateParams, options?: RequestOptions): APIPromise<Placement> {
    return this._client.post('/placements', { body, ...options });
  }

  /**
   * Returns a single placement, including its adoption application and event
   * history.
   */
  retrieve(placementID: string, options?: RequestOptions): APIPromise<Placement> {
    return this._client.get(path`/placements/${placementID}`, options);
  }

  /**
   * Returns a cursor-paginated list of placements.
   */
  list(
    query: PlacementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlacementsCustomCursorPage, Placement> {
    return this._client.getAPIList('/placements', CustomCursorPage<Placement>, { query, ...options });
  }

  /**
   * Appends a transfer, checkup, or disruption event to a placement's history.
   */
  recordEvent(
    placementID: string,
    body: PlacementRecordEventParams,
    options?: RequestOptions,
  ): APIPromise<Placement> {
    return this._client.post(path`/placements/${placementID}/events`, { body, ...options });
  }
}

export type PlacementsCustomCursorPage = CustomCursorPage<Placement>;

/**
 * A post-adoption placement tracking the pet's transition to its new home.
 */
export interface Placement {
  id: string;

  application: AdoptionsAPI.Application;

  createdAt: string;

  status: 'pending' | 'active' | 'completed' | 'disrupted';

  /**
   * Unified activity feed mixing event, milestone, and note entries.
   */
  activity?: Array<
    | Placement.PlacementTransferEvent
    | Placement.PlacementCheckupEvent
    | Placement.PlacementDisruptionEvent
    | Placement.PlacementNote
    | Placement.PlacementAdoptedMilestone
    | Placement.PlacementReturnedMilestone
  >;

  events?: Array<PlacementEvent>;

  followUpAfter?: string | null;

  /**
   * Transport plan for a placement; pickup and delivery share the transfer-leg
   * shape.
   */
  logistics?: Placement.Logistics;

  medicalClearance?: VeterinaryAPI.MedicalSummary;
}

export namespace Placement {
  export interface PlacementTransferEvent {
    id: string;

    leg: PlacementsAPI.TransferLeg;

    occurredAt: string;

    type: 'transfer';

    note?: string | null;
  }

  export interface PlacementCheckupEvent {
    id: string;

    occurredAt: string;

    type: 'checkup';

    followUp?: PlacementCheckupEvent.FollowUp;

    note?: string | null;

    record?: VeterinaryAPI.VaccinationRecord;
  }

  export namespace PlacementCheckupEvent {
    export interface FollowUp {
      due?: string;

      reason?: string;
    }
  }

  export interface PlacementDisruptionEvent {
    id: string;

    occurredAt: string;

    /**
     * A numeric severity score or a structured assessment.
     */
    severity: number | PlacementDisruptionEvent.Assessment;

    type: 'disruption';

    note?: string | null;
  }

  export namespace PlacementDisruptionEvent {
    export interface Assessment {
      level: 'low' | 'high' | 'critical';

      reviewer?: string;
    }
  }

  export interface PlacementNote {
    body: string;

    kind: 'note';
  }

  export interface PlacementAdoptedMilestone {
    adoptedAt: string;

    kind: 'adopted';
  }

  export interface PlacementReturnedMilestone {
    kind: 'returned';

    reason: string;
  }

  /**
   * Transport plan for a placement; pickup and delivery share the transfer-leg
   * shape.
   */
  export interface Logistics {
    delivery?: PlacementsAPI.TransferLeg;

    handler?: Logistics.Handler;

    pickup?: PlacementsAPI.TransferLeg;
  }

  export namespace Logistics {
    export interface Handler {
      certification?: Handler.Certification;

      name?: string;
    }

    export namespace Handler {
      export interface Certification {
        level: 'standard' | 'advanced' | 'specialist';

        /**
         * Provenance stamp attached to records across unrelated resources.
         */
        audit?: Certification.Audit;

        issuedBy?: string;
      }

      export namespace Certification {
        /**
         * Provenance stamp attached to records across unrelated resources.
         */
        export interface Audit {
          recordedAt: string;

          recordedBy?: string;

          source?: 'manual' | 'import' | 'system';
        }
      }
    }
  }
}

/**
 * A placement history entry; the shape depends on the event kind and carries no
 * discriminator mapping.
 */
export type PlacementEvent =
  | PlacementEvent.PlacementTransferEvent
  | PlacementEvent.PlacementCheckupEvent
  | PlacementEvent.PlacementDisruptionEvent;

export namespace PlacementEvent {
  export interface PlacementTransferEvent {
    id: string;

    leg: PlacementsAPI.TransferLeg;

    occurredAt: string;

    type: 'transfer';

    note?: string | null;
  }

  export interface PlacementCheckupEvent {
    id: string;

    occurredAt: string;

    type: 'checkup';

    followUp?: PlacementCheckupEvent.FollowUp;

    note?: string | null;

    record?: VeterinaryAPI.VaccinationRecord;
  }

  export namespace PlacementCheckupEvent {
    export interface FollowUp {
      due?: string;

      reason?: string;
    }
  }

  export interface PlacementDisruptionEvent {
    id: string;

    occurredAt: string;

    /**
     * A numeric severity score or a structured assessment.
     */
    severity: number | PlacementDisruptionEvent.Assessment;

    type: 'disruption';

    note?: string | null;
  }

  export namespace PlacementDisruptionEvent {
    export interface Assessment {
      level: 'low' | 'high' | 'critical';

      reviewer?: string;
    }
  }
}

export interface TransferLeg {
  location: Shared.Address;

  contact?: TransferLeg.Contact;

  cost?: Shared.Money;

  window?: TransferLeg.Window;
}

export namespace TransferLeg {
  export interface Contact {
    name?: string;

    phone?: string;
  }

  export interface Window {
    end?: string;

    start?: string;
  }
}

export interface PlacementCreateParams {
  applicationId: string;

  /**
   * A placement history entry; the shape depends on the event kind and carries no
   * discriminator mapping.
   */
  initialEvent?: PlacementEvent;

  /**
   * Transport plan for a placement; pickup and delivery share the transfer-leg
   * shape.
   */
  logistics?: PlacementCreateParams.Logistics;

  scheduledFor?: string;
}

export namespace PlacementCreateParams {
  /**
   * Transport plan for a placement; pickup and delivery share the transfer-leg
   * shape.
   */
  export interface Logistics {
    delivery?: PlacementsAPI.TransferLeg;

    handler?: Logistics.Handler;

    pickup?: PlacementsAPI.TransferLeg;
  }

  export namespace Logistics {
    export interface Handler {
      certification?: Handler.Certification;

      name?: string;
    }

    export namespace Handler {
      export interface Certification {
        level: 'standard' | 'advanced' | 'specialist';

        /**
         * Provenance stamp attached to records across unrelated resources.
         */
        audit?: Certification.Audit;

        issuedBy?: string;
      }

      export namespace Certification {
        /**
         * Provenance stamp attached to records across unrelated resources.
         */
        export interface Audit {
          recordedAt: string;

          recordedBy?: string;

          source?: 'manual' | 'import' | 'system';
        }
      }
    }
  }
}

export interface PlacementListParams extends CustomCursorPageParams {}

export type PlacementRecordEventParams =
  | PlacementRecordEventParams.PlacementTransferEvent
  | PlacementRecordEventParams.PlacementCheckupEvent
  | PlacementRecordEventParams.PlacementDisruptionEvent;

export declare namespace PlacementRecordEventParams {
  export interface PlacementTransferEvent {
    id: string;

    leg: TransferLeg;

    occurredAt: string;

    type: 'transfer';

    note?: string | null;
  }

  export interface PlacementCheckupEvent {
    id: string;

    occurredAt: string;

    type: 'checkup';

    followUp?: PlacementCheckupEvent.FollowUp;

    note?: string | null;

    record?: VeterinaryAPI.VaccinationRecord;
  }

  export namespace PlacementCheckupEvent {
    export interface FollowUp {
      due?: string;

      reason?: string;
    }
  }

  export interface PlacementDisruptionEvent {
    id: string;

    occurredAt: string;

    /**
     * A numeric severity score or a structured assessment.
     */
    severity: number | PlacementDisruptionEvent.Assessment;

    type: 'disruption';

    note?: string | null;
  }

  export namespace PlacementDisruptionEvent {
    export interface Assessment {
      level: 'low' | 'high' | 'critical';

      reviewer?: string;
    }
  }
}

export declare namespace Placements {
  export {
    type Placement as Placement,
    type PlacementEvent as PlacementEvent,
    type TransferLeg as TransferLeg,
    type PlacementsCustomCursorPage as PlacementsCustomCursorPage,
    type PlacementCreateParams as PlacementCreateParams,
    type PlacementListParams as PlacementListParams,
    type PlacementRecordEventParams as PlacementRecordEventParams,
  };
}
