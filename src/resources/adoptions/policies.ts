// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PoliciesAPI from './policies';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { CustomCursorPage, type CustomCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Adoption policies and applications
 */
export class Policies extends APIResource {
  /**
   * Creates an adoption policy from a set of eligibility rules, regional overrides,
   * and an optional escalation rule group.
   */
  create(body: PolicyCreateParams, options?: RequestOptions): APIPromise<Policy> {
    return this._client.post('/adoptions/policies', { body, ...options });
  }

  /**
   * Returns a single adoption policy.
   */
  retrieve(policyID: string, options?: RequestOptions): APIPromise<Policy> {
    return this._client.get(path`/adoptions/policies/${policyID}`, options);
  }

  /**
   * Updates either the policy details or its lifecycle state.
   */
  update(policyID: string, body: PolicyUpdateParams, options?: RequestOptions): APIPromise<Policy> {
    return this._client.patch(path`/adoptions/policies/${policyID}`, { body, ...options });
  }

  /**
   * Returns a cursor-paginated list of adoption policies.
   */
  list(
    query: PolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PoliciesCustomCursorPage, Policy> {
    return this._client.getAPIList('/adoptions/policies', CustomCursorPage<Policy>, { query, ...options });
  }
}

export type PoliciesCustomCursorPage = CustomCursorPage<Policy>;

export interface AdoptionRule {
  /**
   * The applicant or pet attribute the rule targets.
   */
  attribute: RuleAttribute;

  operation:
    | 'IS_ONE_OF'
    | 'IS_NOT_ONE_OF'
    | 'MATCHES'
    | 'IS_GREATER_THAN'
    | 'IS_LESS_THAN'
    | 'IS_BEFORE'
    | 'IS_AFTER';

  /**
   * A regex string, to be used with `MATCHES`
   */
  value?: ConditionValue;
}

/**
 * A regex string, to be used with `MATCHES`
 */
export type ConditionValue = string | number | number | Array<string> | (string & {});

export interface Policy {
  id: string;

  createdAt: string;

  name: string;

  rules: Array<AdoptionRule>;

  status: 'draft' | 'active' | 'archived';

  escalation?: Policy.Escalation;

  feeCap?: Shared.Money;

  /**
   * Where policy decisions are delivered: a plain email address or a webhook sink.
   */
  notificationTarget?: string | Policy.WebhookSink;

  /**
   * Per-region override values keyed by region code.
   */
  regionalOverrides?: { [key: string]: ConditionValue };
}

export namespace Policy {
  export interface Escalation {
    operator: 'ALL' | 'ANY';

    /**
     * Nested rule groups; groups can recurse arbitrarily deep.
     */
    groups?: Array<unknown>;

    rules?: Array<PoliciesAPI.AdoptionRule>;
  }

  export interface WebhookSink {
    url: string;

    events?: Array<'approved' | 'rejected' | 'escalated'>;
  }
}

/**
 * The applicant or pet attribute the rule targets.
 */
export type RuleAttribute =
  | 'PET_STATUS'
  | 'SPECIES'
  | 'ADOPTER_AGE'
  | 'REGION'
  | 'PRIOR_ADOPTIONS'
  | 'APPLICATION_DATE';

export interface PolicyCreateParams {
  name: string;

  rules: Array<AdoptionRule>;

  escalation?: PolicyCreateParams.Escalation;

  feeCap?: Shared.Money;

  /**
   * Where policy decisions are delivered: a plain email address or a webhook sink.
   */
  notificationTarget?: string | PolicyCreateParams.WebhookSink;

  regionalOverrides?: { [key: string]: ConditionValue };
}

export namespace PolicyCreateParams {
  export interface Escalation {
    operator: 'ALL' | 'ANY';

    /**
     * Nested rule groups; groups can recurse arbitrarily deep.
     */
    groups?: Array<unknown>;

    rules?: Array<PoliciesAPI.AdoptionRule>;
  }

  export interface WebhookSink {
    url: string;

    events?: Array<'approved' | 'rejected' | 'escalated'>;

    secret?: string;
  }
}

export type PolicyUpdateParams =
  | PolicyUpdateParams.AdoptionPolicyDetailsUpdate
  | PolicyUpdateParams.AdoptionPolicyLifecycleUpdate;

export declare namespace PolicyUpdateParams {
  export interface AdoptionPolicyDetailsUpdate {
    escalation?: AdoptionPolicyDetailsUpdate.Escalation;

    name?: string;

    /**
     * Where policy decisions are delivered: a plain email address or a webhook sink.
     */
    notificationTarget?: string | AdoptionPolicyDetailsUpdate.WebhookSink;
  }

  export namespace AdoptionPolicyDetailsUpdate {
    export interface Escalation {
      operator: 'ALL' | 'ANY';

      /**
       * Nested rule groups; groups can recurse arbitrarily deep.
       */
      groups?: Array<unknown>;

      rules?: Array<PoliciesAPI.AdoptionRule>;
    }

    export interface WebhookSink {
      url: string;

      events?: Array<'approved' | 'rejected' | 'escalated'>;

      secret?: string;
    }
  }

  export interface AdoptionPolicyLifecycleUpdate {
    actor: string;

    status: 'active' | 'archived';

    actedAt?: string;

    reason?: string;
  }
}

export interface PolicyListParams extends CustomCursorPageParams {}

export declare namespace Policies {
  export {
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
