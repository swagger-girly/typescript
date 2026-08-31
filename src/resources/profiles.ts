// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Pet owner profile and compliance operations
 */
export class Profiles extends APIResource {
  /**
   * Creates a pet owner profile with nested preferences, metadata maps, and
   * compliance-only write fields.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.create({
   *   displayName: 'Ada Lovelace',
   *   email: 'ada@example.com',
   *   metadata: { crm_id: 'crm_123' },
   *   preferences: {
   *     newsletter: true,
   *     alerts: { inventory: true },
   *   },
   *   secretNote: 'verified manually',
   * });
   * ```
   */
  create(params: ProfileCreateParams, options?: RequestOptions): APIPromise<Profile> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/profiles', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a profile with read-only version fields and nullable contact
   * preferences.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.retrieve('profileId');
   * ```
   */
  retrieve(profileID: string, options?: RequestOptions): APIPromise<Profile> {
    return this._client.get(path`/profiles/${profileID}`, options);
  }

  /**
   * Updates either public profile details or archival state.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.update('profileId');
   * ```
   */
  update(profileID: string, params: ProfileUpdateParams, options?: RequestOptions): APIPromise<Profile> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.patch(path`/profiles/${profileID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Deprecated profile search endpoint kept for compatibility.
   *
   * @deprecated
   */
  legacySearch(
    query: ProfileLegacySearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileLegacySearchResponse> {
    return this._client.get('/profiles/legacy-search', { query, ...options });
  }
}

export interface Profile {
  id: string;

  createdAt: string;

  displayName: string;

  updatedAt: string;

  version: number;

  /**
   * Free-form audit metadata retained from integrations.
   */
  auditTrail?: { [key: string]: unknown };

  email?: string | null;

  /**
   * @deprecated Deprecated external profile code.
   */
  legacyCode?: string;

  metadata?: { [key: string]: string };

  phoneNumbers?: Array<string> | null;

  preferences?: Profile.Preferences;
}

export namespace Profile {
  export interface Preferences {
    alerts?: { [key: string]: boolean };

    newsletter?: boolean;

    scoreByRegion?: unknown;
  }
}

export interface ProfileCreateRequest {
  displayName: string;

  email?: string | null;

  metadata?: { [key: string]: string };

  preferences?: ProfileCreateRequest.Preferences;
}

export namespace ProfileCreateRequest {
  export interface Preferences {
    alerts?: { [key: string]: boolean };

    newsletter?: boolean;

    scoreByRegion?: unknown;
  }
}

export type ProfileLegacySearchResponse = Array<Profile>;

export interface ProfileCreateParams {
  /**
   * Body param
   */
  displayName: string;

  /**
   * Body param
   */
  email?: string | null;

  /**
   * Body param: Compliance identifier used only during profile creation.
   */
  governmentId?: string;

  /**
   * Body param
   */
  metadata?: { [key: string]: string };

  /**
   * Body param
   */
  preferences?: ProfileCreateParams.Preferences;

  /**
   * Body param: Internal note that must not be emitted in profile responses.
   */
  secretNote?: string;

  /**
   * Header param: Unique key used to safely retry profile mutations.
   */
  'Idempotency-Key'?: string;
}

export namespace ProfileCreateParams {
  export interface Preferences {
    alerts?: { [key: string]: boolean };

    newsletter?: boolean;

    scoreByRegion?: unknown;
  }
}

export type ProfileUpdateParams =
  | ProfileUpdateParams.ProfileDetailsUpdate
  | ProfileUpdateParams.ProfileArchiveUpdate;

export declare namespace ProfileUpdateParams {
  export interface ProfileDetailsUpdate {
    /**
     * Body param
     */
    displayName?: string;

    /**
     * Body param
     */
    email?: string | null;

    /**
     * Body param
     */
    metadata?: { [key: string]: string };

    /**
     * Body param
     */
    preferences?: ProfileDetailsUpdate.Preferences;

    /**
     * Header param: Unique key used to safely retry profile mutations.
     */
    'Idempotency-Key'?: string;
  }

  export namespace ProfileDetailsUpdate {
    export interface Preferences {
      alerts?: { [key: string]: boolean };

      newsletter?: boolean;

      scoreByRegion?: unknown;
    }
  }

  export interface ProfileArchiveUpdate {
    /**
     * Body param
     */
    archivedAt: string;

    /**
     * Body param
     */
    archivedReason: 'duplicate' | 'requested' | 'policy_violation';

    /**
     * Header param: Unique key used to safely retry profile mutations.
     */
    'Idempotency-Key'?: string;
  }
}

export interface ProfileLegacySearchParams {
  /**
   * Whether archived profiles should be included.
   */
  include_archived?: boolean;

  /**
   * Legacy free-text search string.
   */
  q?: string;
}

export declare namespace Profiles {
  export {
    type Profile as Profile,
    type ProfileCreateRequest as ProfileCreateRequest,
    type ProfileLegacySearchResponse as ProfileLegacySearchResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
    type ProfileLegacySearchParams as ProfileLegacySearchParams,
  };
}
