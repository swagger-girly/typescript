// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

/**
 * File storage operations
 */
export class Files extends APIResource {
  /**
   * Updates a stored file with either a multipart file part or a URL.
   */
  update(
    path_: string,
    body: FileUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<File> {
    return this._client.put(
      path`/files/${path_}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns all files in descending order.
   */
  list(options?: RequestOptions): APIPromise<Fileslist> {
    return this._client.get('/files', options);
  }

  /**
   * Deletes a file while preserving slashes in the file path parameter.
   */
  delete(path_: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Uploads multiple files and nested manifest metadata as multipart/form-data.
   */
  createArchive(body: FileCreateArchiveParams, options?: RequestOptions): APIPromise<Archive> {
    return this._client.post(
      '/files/archive',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Downloads a file while preserving slashes in the file path parameter.
   */
  download(path_: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/files/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Uploads a file via multipart/form-data with metadata and optional storage path.
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<File> {
    return this._client.post('/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Uploads a whole request body as application/octet-stream.
   */
  uploadDirect(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: FileUploadDirectParams,
    options?: RequestOptions,
  ): APIPromise<File> {
    const { path: path_, 'X-File-Name': xFileName } = params;
    return this._client.post('/files/direct', {
      body: body,
      query: { path: path_ },
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/octet-stream',
          ...(xFileName != null ? { 'X-File-Name': xFileName } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface Archive {
  id: string;

  status: 'queued' | 'processing' | 'complete';

  fileCount?: number;
}

export interface File {
  /**
   * Timestamp when the file was last modified.
   */
  lastModified: string;

  /**
   * Path to the file in storage.
   */
  path: string;

  /**
   * Size of the file in bytes.
   */
  size: number;

  /**
   * Detected MIME type for the file.
   */
  contentType?: string;
}

export interface Fileslist {
  data: Array<File>;
}

export interface FileUpdateParams {
  /**
   * Replacement file content.
   */
  file?: Uploadable;

  /**
   * Metadata to merge onto the stored file.
   */
  metadata?: { [key: string]: string };

  /**
   * URL to fetch replacement file content from.
   */
  url?: string;
}

export interface FileCreateArchiveParams {
  /**
   * Files to include in the archive.
   */
  files: Array<Uploadable>;

  manifest?: FileCreateArchiveParams.Manifest;
}

export namespace FileCreateArchiveParams {
  export interface Manifest {
    name: string;

    labels?: Array<string>;

    preservePaths?: boolean;
  }
}

export interface FileUploadParams {
  /**
   * The file to upload.
   */
  file: Uploadable;

  /**
   * Optional expiration in seconds.
   */
  expiresIn?: number;

  /**
   * Additional metadata to store with the file.
   */
  metadata?: { [key: string]: string };

  /**
   * Optional storage path for the uploaded file.
   */
  path?: string;

  /**
   * Whether the file should be publicly readable.
   */
  public?: boolean;

  /**
   * Tags to associate with the file.
   */
  tags?: Array<string>;
}

export interface FileUploadDirectParams {
  /**
   * Query param: Optional storage path for the raw file.
   */
  path?: string;

  /**
   * Header param: Optional original file name.
   */
  'X-File-Name'?: string;
}

export declare namespace Files {
  export {
    type Archive as Archive,
    type File as File,
    type Fileslist as Fileslist,
    type FileUpdateParams as FileUpdateParams,
    type FileCreateArchiveParams as FileCreateArchiveParams,
    type FileUploadParams as FileUploadParams,
    type FileUploadDirectParams as FileUploadDirectParams,
  };
}
