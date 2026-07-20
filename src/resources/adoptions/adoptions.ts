// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as PoliciesAPI from './policies';
import {
  AdoptionRule,
  ConditionValue,
  Policies,
  PoliciesCustomCursorPage,
  Policy,
  PolicyCreateParams,
  PolicyListParams,
  PolicyUpdateParams,
  RuleAttribute,
} from './policies';
import * as PetAPI from '../pet/pet';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Adoption policies and applications
 */
export class Adoptions extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Submits an adoption application for an individual or an organization applicant.
   */
  create(body: AdoptionCreateParams, options?: RequestOptions): APIPromise<Application> {
    return this._client.post('/adoptions/applications', { body, ...options });
  }

  /**
   * Returns a single adoption application.
   */
  retrieve(applicationID: string, options?: RequestOptions): APIPromise<Application> {
    return this._client.get(path`/adoptions/applications/${applicationID}`, options);
  }

  /**
   * Returns the decision for an application. The decision shape depends on the
   * outcome and carries no discriminator mapping.
   */
  retrieveDecision(
    applicationID: string,
    options?: RequestOptions,
  ): APIPromise<AdoptionRetrieveDecisionResponse> {
    return this._client.get(path`/adoptions/applications/${applicationID}/decision`, options);
  }
}

export interface Application {
  id: string;

  applicant: Application.IndividualApplicant | Application.OrganizationApplicant;

  status: 'received' | 'under_review' | 'approved' | 'rejected';

  submittedAt: string;

  /**
   * The decision for an application; the shape depends on the outcome.
   */
  decision?:
    | Application.DecisionApproved
    | Application.DecisionRejected
    | Application.DecisionEscalated
    | Application.DecisionWithdrawn;

  fee?: Shared.Money;

  history?: Array<Application.History>;

  latestRejection?: Application.LatestRejection;

  pet?: PetAPI.Pet;
}

export namespace Application {
  export interface IndividualApplicant {
    applicant_type: 'individual';

    name: string;

    address?: Shared.Address;

    age?: number;

    email?: string;
  }

  export interface OrganizationApplicant {
    applicant_type: 'organization';

    name: string;

    shelter?: OrganizationApplicant.Shelter;

    taxId?: string;
  }

  export namespace OrganizationApplicant {
    export interface Shelter {
      name: string;

      address?: Shared.Address;

      contact?: Shelter.Contact;

      location?: Shelter.Location;
    }

    export namespace Shelter {
      export interface Contact {
        primary?: Contact.Primary;
      }

      export namespace Contact {
        export interface Primary {
          availability?: Primary.Availability;

          name?: string;

          phone?: string;
        }

        export namespace Primary {
          export interface Availability {
            weekday?: Availability.Weekday;

            weekend?: Availability.Weekend | null;
          }

          export namespace Availability {
            export interface Weekday {
              close?: string;

              open?: string;
            }

            export interface Weekend {
              close?: string;

              open?: string;
            }
          }
        }
      }

      export interface Location {
        latitude: number;

        longitude: number;
      }
    }
  }

  export interface DecisionApproved {
    approvedAt: string;

    outcome: 'approved';

    conditions?: Array<string>;
  }

  export interface DecisionRejected {
    outcome: 'rejected';

    reason: 'policy' | 'capacity' | 'incomplete';

    appealDeadline?: string | null;
  }

  export interface DecisionEscalated {
    escalatedTo: DecisionEscalated.EscalatedTo;

    outcome: 'escalated';

    reviewAfter?: string;
  }

  export namespace DecisionEscalated {
    export interface EscalatedTo {
      team: string;

      contact?: EscalatedTo.Contact;
    }

    export namespace EscalatedTo {
      export interface Contact {
        email?: string;

        hours?: string;
      }
    }
  }

  /**
   * The applicant or shelter withdrew before a decision was finalized.
   */
  export interface DecisionWithdrawn {
    outcome: 'withdrawn' | 'expired';

    withdrawnBy: 'applicant' | 'shelter' | 'system';

    withdrawnAt?: string;
  }

  export interface History {
    changedAt: string;

    status: 'received' | 'under_review' | 'approved' | 'rejected';

    note?: string | null;
  }

  export interface LatestRejection {
    outcome: 'rejected';

    reason: 'policy' | 'capacity' | 'incomplete';

    appealDeadline?: string | null;
  }
}

/**
 * The decision for an application; the shape depends on the outcome.
 */
export type AdoptionRetrieveDecisionResponse =
  | AdoptionRetrieveDecisionResponse.DecisionApproved
  | AdoptionRetrieveDecisionResponse.DecisionRejected
  | AdoptionRetrieveDecisionResponse.DecisionEscalated
  | AdoptionRetrieveDecisionResponse.DecisionWithdrawn;

export namespace AdoptionRetrieveDecisionResponse {
  export interface DecisionApproved {
    approvedAt: string;

    outcome: 'approved';

    conditions?: Array<string>;
  }

  export interface DecisionRejected {
    outcome: 'rejected';

    reason: 'policy' | 'capacity' | 'incomplete';

    appealDeadline?: string | null;
  }

  export interface DecisionEscalated {
    escalatedTo: DecisionEscalated.EscalatedTo;

    outcome: 'escalated';

    reviewAfter?: string;
  }

  export namespace DecisionEscalated {
    export interface EscalatedTo {
      team: string;

      contact?: EscalatedTo.Contact;
    }

    export namespace EscalatedTo {
      export interface Contact {
        email?: string;

        hours?: string;
      }
    }
  }

  /**
   * The applicant or shelter withdrew before a decision was finalized.
   */
  export interface DecisionWithdrawn {
    outcome: 'withdrawn' | 'expired';

    withdrawnBy: 'applicant' | 'shelter' | 'system';

    withdrawnAt?: string;
  }
}

export type AdoptionCreateParams =
  | AdoptionCreateParams.IndividualApplicant
  | AdoptionCreateParams.OrganizationApplicant;

export declare namespace AdoptionCreateParams {
  export interface IndividualApplicant {
    applicant_type: 'individual';

    name: string;

    address?: Shared.Address;

    age?: number;

    email?: string;
  }

  export interface OrganizationApplicant {
    applicant_type: 'organization';

    name: string;

    shelter?: OrganizationApplicant.Shelter;

    taxId?: string;
  }

  export namespace OrganizationApplicant {
    export interface Shelter {
      name: string;

      address?: Shared.Address;

      contact?: Shelter.Contact;

      location?: Shelter.Location;
    }

    export namespace Shelter {
      export interface Contact {
        primary?: Contact.Primary;
      }

      export namespace Contact {
        export interface Primary {
          availability?: Primary.Availability;

          name?: string;

          phone?: string;
        }

        export namespace Primary {
          export interface Availability {
            weekday?: Availability.Weekday;

            weekend?: Availability.Weekend | null;
          }

          export namespace Availability {
            export interface Weekday {
              close?: string;

              open?: string;
            }

            export interface Weekend {
              close?: string;

              open?: string;
            }
          }
        }
      }

      export interface Location {
        latitude: number;

        longitude: number;
      }
    }
  }
}

Adoptions.Policies = Policies;

export declare namespace Adoptions {
  export {
    type Application as Application,
    type AdoptionRetrieveDecisionResponse as AdoptionRetrieveDecisionResponse,
    type AdoptionCreateParams as AdoptionCreateParams,
  };

  export {
    Policies as Policies,
    type AdoptionRule as AdoptionRule,
    type ConditionValue as ConditionValue,
    type Policy as Policy,
    type RuleAttribute as RuleAttribute,
    type PoliciesCustomCursorPage as PoliciesCustomCursorPage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
  };
}
