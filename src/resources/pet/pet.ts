// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PetAPI from './pet';
import { APIPromise } from '../../core/api-promise';
import {
  CustomCursorPage,
  type CustomCursorPageParams,
  PagePromise,
  XFakeSinglePage,
} from '../../core/pagination';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Everything about your Pets
 */
export class PetResource extends APIResource {
  /**
   * Add a new pet to the store
   *
   * @example
   * ```ts
   * const pet = await client.pet.create({
   *   name: 'doggie',
   *   photoUrls: ['string'],
   * });
   * ```
   */
  create(body: PetCreateParams, options?: RequestOptions): APIPromise<Pet> {
    return this._client.post('/pet', { body, ...options });
  }

  /**
   * Returns a single pet
   *
   * @example
   * ```ts
   * const pet = await client.pet.retrieve(0);
   * ```
   */
  retrieve(petID: number, options?: RequestOptions): APIPromise<Pet> {
    return this._client.get(path`/pet/${petID}`, options);
  }

  /**
   * Update an existing pet by Id
   *
   * @example
   * ```ts
   * const pet = await client.pet.update({
   *   name: 'doggie',
   *   photoUrls: ['string'],
   * });
   * ```
   */
  update(body: PetUpdateParams, options?: RequestOptions): APIPromise<Pet> {
    return this._client.put('/pet', { body, ...options });
  }

  /**
   * Returns a cursor-paginated list of pets.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const pet of client.pet.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PetsCustomCursorPage, Pet> {
    return this._client.getAPIList('/pet', CustomCursorPage<Pet>, { query, ...options });
  }

  /**
   * Deletes a pet
   *
   * @example
   * ```ts
   * await client.pet.delete(0);
   * ```
   */
  delete(petID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/pet/${petID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Multiple status values can be provided with comma separated strings
   *
   * @example
   * ```ts
   * const pets = await client.pet.findByStatus();
   * ```
   */
  findByStatus(
    query: PetFindByStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PetFindByStatusResponse> {
    return this._client.get('/pet/findByStatus', { query, ...options });
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3
   * for testing.
   *
   * @example
   * ```ts
   * const pets = await client.pet.findByTags();
   * ```
   */
  findByTags(
    query: PetFindByTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PetFindByTagsResponse> {
    return this._client.get('/pet/findByTags', { query, ...options });
  }

  /**
   * Returns a single page-shaped pet response without SDK pagination helpers.
   *
   * @example
   * ```ts
   * const response = await client.pet.listFakePage();
   * ```
   */
  listFakePage(options?: RequestOptions): APIPromise<PetListFakePageResponse> {
    return this._client.get('/pet/fake-page', options);
  }

  /**
   * Returns a single page-shaped pet response whose fake pagination behavior is
   * inferred from the Stainless config scheme.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const pet of client.pet.listFakePageInferred()) {
   *   // ...
   * }
   * ```
   */
  listFakePageInferred(options?: RequestOptions): PagePromise<PetsXFakeSinglePage, Pet> {
    return this._client.getAPIList('/pet/fake-page-inferred', XFakeSinglePage<Pet>, options);
  }

  /**
   * Returns the same cursor-shaped pet list response without enabling SDK pagination
   * helpers.
   *
   * @example
   * ```ts
   * const response = await client.pet.listUnpaginated();
   * ```
   */
  listUnpaginated(
    query: PetListUnpaginatedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PetListUnpaginatedResponse> {
    return this._client.get('/pet/unpaginated', { query, ...options });
  }

  /**
   * Updates a pet in the store with form data
   *
   * @example
   * ```ts
   * await client.pet.updateWithForm(0);
   * ```
   */
  updateWithForm(
    petID: number,
    params: PetUpdateWithFormParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { name, status } = params ?? {};
    return this._client.post(path`/pet/${petID}`, {
      query: { name, status },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * uploads an image
   *
   * @example
   * ```ts
   * const response = await client.pet.uploadImage(
   *   0,
   *   fs.createReadStream('path/to/file'),
   * );
   * ```
   */
  uploadImage(
    petID: number,
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: PetUploadImageParams,
    options?: RequestOptions,
  ): APIPromise<PetUploadImageResponse> {
    const { additionalMetadata } = params;
    return this._client.post(path`/pet/${petID}/uploadImage`, {
      body: body,
      query: { additionalMetadata },
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }

  /**
   * Streams pet status updates over Server-Sent Events. Each `status` event contains
   * a full `Pet` payload.
   *
   * @example
   * ```ts
   * const pet = await client.pet.watchStatus(0);
   * ```
   */
  watchStatus(
    petID: number,
    params: PetWatchStatusParams | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Stream<unknown>> {
    const { 'Last-Event-ID': lastEventID } = params ?? {};
    return this._client.get(path`/pet/${petID}/status/stream`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: 'text/event-stream',
          ...(lastEventID != null ? { 'Last-Event-ID': lastEventID } : undefined),
        },
        options?.headers,
      ]),
      stream: true,
    }) as APIPromise<Stream<unknown>>;
  }
}

export type PetsCustomCursorPage = CustomCursorPage<Pet>;

export type PetsXFakeSinglePage = XFakeSinglePage<Pet>;

export interface Pet {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: Pet.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';

  tags?: Array<Pet.Tag>;
}

export namespace Pet {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export type PetFindByStatusResponse = Array<Pet>;

export type PetFindByTagsResponse = Array<Pet>;

export interface PetListFakePageResponse {
  data: Array<Pet>;

  has_more: boolean;
}

export interface PetListUnpaginatedResponse {
  items: Array<Pet>;

  next_cursor?: string | null;
}

export interface PetUploadImageResponse {
  code?: number;

  message?: string;

  type?: string;
}

export type ConnectClientEvent =
  | ConnectClientEvent.PetClientPingEvent
  | ConnectClientEvent.PetClientSubscribeEvent;

export namespace ConnectClientEvent {
  export interface PetClientPingEvent {
    type: 'ping';
  }

  export interface PetClientSubscribeEvent {
    status: 'available' | 'pending' | 'sold';

    type: 'subscribe';
  }
}

export type ConnectServerEvent =
  | ConnectServerEvent.PetServerPongEvent
  | ConnectServerEvent.PetServerStatusEvent;

export namespace ConnectServerEvent {
  export interface PetServerPongEvent {
    type: 'pong';
  }

  export interface PetServerStatusEvent {
    pet: PetAPI.Pet;

    type: 'status';
  }
}

export interface PetCreateParams {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: PetCreateParams.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';

  tags?: Array<PetCreateParams.Tag>;
}

export namespace PetCreateParams {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export interface PetUpdateParams {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: PetUpdateParams.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';

  tags?: Array<PetUpdateParams.Tag>;
}

export namespace PetUpdateParams {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export interface PetListParams extends CustomCursorPageParams {}

export interface PetFindByStatusParams {
  /**
   * Status values that need to be considered for filter
   */
  status?: 'available' | 'pending' | 'sold';
}

export interface PetFindByTagsParams {
  /**
   * Tags to filter by
   */
  tags?: Array<string>;
}

export interface PetListUnpaginatedParams {
  /**
   * Cursor from a previous response used to fetch the next page.
   */
  cursor?: string;

  /**
   * Maximum number of pets to return.
   */
  limit?: number;
}

export interface PetUpdateWithFormParams {
  /**
   * Name of pet that needs to be updated
   */
  name?: string;

  /**
   * Status of pet that needs to be updated
   */
  status?: string;
}

export interface PetUploadImageParams {
  /**
   * Query param: Additional Metadata
   */
  additionalMetadata?: string;
}

export interface PetWatchStatusParams {
  /**
   * Optional event identifier used to resume a previous stream.
   */
  'Last-Event-ID'?: string;
}

export declare namespace PetResource {
  export {
    type Pet as Pet,
    type PetFindByStatusResponse as PetFindByStatusResponse,
    type PetFindByTagsResponse as PetFindByTagsResponse,
    type PetListFakePageResponse as PetListFakePageResponse,
    type PetListUnpaginatedResponse as PetListUnpaginatedResponse,
    type PetUploadImageResponse as PetUploadImageResponse,
    type ConnectClientEvent as ConnectClientEvent,
    type ConnectServerEvent as ConnectServerEvent,
    type PetsCustomCursorPage as PetsCustomCursorPage,
    type PetsXFakeSinglePage as PetsXFakeSinglePage,
    type PetCreateParams as PetCreateParams,
    type PetUpdateParams as PetUpdateParams,
    type PetListParams as PetListParams,
    type PetFindByStatusParams as PetFindByStatusParams,
    type PetFindByTagsParams as PetFindByTagsParams,
    type PetListUnpaginatedParams as PetListUnpaginatedParams,
    type PetUpdateWithFormParams as PetUpdateWithFormParams,
    type PetUploadImageParams as PetUploadImageParams,
    type PetWatchStatusParams as PetWatchStatusParams,
  };
}
