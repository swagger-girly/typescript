// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Media extends APIResource {
  /**
   * A binary body alongside a JSON media type.
   */
  binaryAndJson(options?: RequestOptions): APIPromise<MediaBinaryAndJsonResponse> {
    return this._client.get('/media/binary-and-json', options);
  }

  /**
   * JSON alongside an XML media type.
   */
  jsonAndXml(options?: RequestOptions): APIPromise<MediaJsonAndXmlResponse> {
    return this._client.get('/media/json-and-xml', options);
  }

  /**
   * JSON listed before a text media type.
   */
  jsonFirst(options?: RequestOptions): APIPromise<MediaJsonFirstResponse> {
    return this._client.get('/media/json-first', options);
  }

  /**
   * Schema present on application/json but absent on a text/plain listed first.
   */
  schemaOnJson(options?: RequestOptions): APIPromise<MediaSchemaOnJsonResponse> {
    return this._client.get('/media/schema-on-json', options);
  }

  /**
   * Schema present on text/plain but absent on application/json.
   */
  schemaOnText(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/media/schema-on-text', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Text media type listed before JSON (both with a schema).
   */
  textFirst(options?: RequestOptions): APIPromise<MediaTextFirstResponse> {
    return this._client.get('/media/text-first', options);
  }

  /**
   * A single text/plain body.
   */
  textOnly(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/media/text-only', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * A vendor application/vnd.pet.v2+json media type.
   */
  vendorJson(options?: RequestOptions): APIPromise<MediaVendorJsonResponse> {
    return this._client.get('/media/vendor-json', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.pet.v2+json' }, options?.headers]),
    });
  }
}

export interface MediaBinaryAndJsonResponse {
  id: string;

  label?: string;
}

export interface MediaJsonAndXmlResponse {
  id: string;

  label?: string;
}

export interface MediaJsonFirstResponse {
  id: string;

  label?: string;
}

export interface MediaSchemaOnJsonResponse {
  id: string;

  label?: string;
}

export interface MediaTextFirstResponse {
  id: string;

  label?: string;
}

export type MediaTextOnlyResponse = string;

export interface MediaVendorJsonResponse {
  id: string;

  label?: string;
}

export declare namespace Media {
  export {
    type MediaBinaryAndJsonResponse as MediaBinaryAndJsonResponse,
    type MediaJsonAndXmlResponse as MediaJsonAndXmlResponse,
    type MediaJsonFirstResponse as MediaJsonFirstResponse,
    type MediaSchemaOnJsonResponse as MediaSchemaOnJsonResponse,
    type MediaTextFirstResponse as MediaTextFirstResponse,
    type MediaTextOnlyResponse as MediaTextOnlyResponse,
    type MediaVendorJsonResponse as MediaVendorJsonResponse,
  };
}
