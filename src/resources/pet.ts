// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Everything about your Pets
 */
export class Pet extends APIResource {
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
  create(body: PetCreateParams, options?: RequestOptions): APIPromise<PetCreateResponse> {
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
  retrieve(petID: number, options?: RequestOptions): APIPromise<PetRetrieveResponse> {
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
  update(body: PetUpdateParams, options?: RequestOptions): APIPromise<PetUpdateResponse> {
    return this._client.put('/pet', { body, ...options });
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
   * const response = await client.pet.findByStatus();
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
   * const response = await client.pet.findByTags();
   * ```
   */
  findByTags(
    query: PetFindByTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PetFindByTagsResponse> {
    return this._client.get('/pet/findByTags', { query, ...options });
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
    params: PetUploadImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PetUploadImageResponse> {
    const { additionalMetadata } = params ?? {};
    return this._client.post(path`/pet/${petID}/uploadImage`, {
      body: body,
      query: { additionalMetadata },
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }
}

export interface PetCreateResponse {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: PetCreateResponse.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';

  tags?: Array<PetCreateResponse.Tag>;
}

export namespace PetCreateResponse {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export interface PetRetrieveResponse {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: PetRetrieveResponse.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';

  tags?: Array<PetRetrieveResponse.Tag>;
}

export namespace PetRetrieveResponse {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export interface PetUpdateResponse {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: PetUpdateResponse.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';

  tags?: Array<PetUpdateResponse.Tag>;
}

export namespace PetUpdateResponse {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export type PetFindByStatusResponse = Array<PetFindByStatusResponse.PetFindByStatusResponseItem>;

export namespace PetFindByStatusResponse {
  export interface PetFindByStatusResponseItem {
    name: string;

    photoUrls: Array<string>;

    id?: number;

    category?: PetFindByStatusResponseItem.Category;

    /**
     * pet status in the store
     */
    status?: 'available' | 'pending' | 'sold';

    tags?: Array<PetFindByStatusResponseItem.Tag>;
  }

  export namespace PetFindByStatusResponseItem {
    export interface Category {
      id?: number;

      name?: string;
    }

    export interface Tag {
      id?: number;

      name?: string;
    }
  }
}

export type PetFindByTagsResponse = Array<PetFindByTagsResponse.PetFindByTagsResponseItem>;

export namespace PetFindByTagsResponse {
  export interface PetFindByTagsResponseItem {
    name: string;

    photoUrls: Array<string>;

    id?: number;

    category?: PetFindByTagsResponseItem.Category;

    /**
     * pet status in the store
     */
    status?: 'available' | 'pending' | 'sold';

    tags?: Array<PetFindByTagsResponseItem.Tag>;
  }

  export namespace PetFindByTagsResponseItem {
    export interface Category {
      id?: number;

      name?: string;
    }

    export interface Tag {
      id?: number;

      name?: string;
    }
  }
}

export interface PetUploadImageResponse {
  code?: number;

  message?: string;

  type?: string;
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

export declare namespace Pet {
  export {
    type PetCreateResponse as PetCreateResponse,
    type PetRetrieveResponse as PetRetrieveResponse,
    type PetUpdateResponse as PetUpdateResponse,
    type PetFindByStatusResponse as PetFindByStatusResponse,
    type PetFindByTagsResponse as PetFindByTagsResponse,
    type PetUploadImageResponse as PetUploadImageResponse,
    type PetCreateParams as PetCreateParams,
    type PetUpdateParams as PetUpdateParams,
    type PetFindByStatusParams as PetFindByStatusParams,
    type PetFindByTagsParams as PetFindByTagsParams,
    type PetUpdateWithFormParams as PetUpdateWithFormParams,
    type PetUploadImageParams as PetUploadImageParams,
  };
}
