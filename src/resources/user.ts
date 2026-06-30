// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Operations about user
 */
export class User extends APIResource {
  /**
   * This can only be done by the logged in user.
   *
   * @example
   * ```ts
   * const user = await client.user.create();
   * ```
   */
  create(
    body: UserCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserCreateResponse> {
    return this._client.post('/user', { body, ...options });
  }

  /**
   * Get user by user name
   *
   * @example
   * ```ts
   * const user = await client.user.retrieve('username');
   * ```
   */
  retrieve(username: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/user/${username}`, options);
  }

  /**
   * This can only be done by the logged in user.
   *
   * @example
   * ```ts
   * await client.user.update('username');
   * ```
   */
  update(
    username: string,
    body: UserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/user/${username}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This can only be done by the logged in user.
   *
   * @example
   * ```ts
   * await client.user.delete('username');
   * ```
   */
  delete(username: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/user/${username}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates list of users with given input array
   *
   * @example
   * ```ts
   * const response = await client.user.createWithList();
   * ```
   */
  createWithList(
    params: UserCreateWithListParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<UserCreateWithListResponse> {
    const { body } = params ?? {};
    return this._client.post('/user/createWithList', { body: body, ...options });
  }

  /**
   * Logs user into the system
   *
   * @example
   * ```ts
   * const response = await client.user.login();
   * ```
   */
  login(query: UserLoginParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/user/login', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Logs out current logged in user session
   *
   * @example
   * ```ts
   * await client.user.logout();
   * ```
   */
  logout(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/user/logout', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserCreateResponse {
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

export interface UserRetrieveResponse {
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

export interface UserCreateWithListResponse {
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

export type UserLoginResponse = string;

export interface UserCreateParams {
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

export interface UserUpdateParams {
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

export interface UserCreateWithListParams {
  body?: Array<UserCreateWithListParams.Body>;
}

export namespace UserCreateWithListParams {
  export interface Body {
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

export interface UserLoginParams {
  /**
   * The password for login in clear text
   */
  password?: string;

  /**
   * The user name for login
   */
  username?: string;
}

export declare namespace User {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserCreateWithListResponse as UserCreateWithListResponse,
    type UserLoginResponse as UserLoginResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserCreateWithListParams as UserCreateWithListParams,
    type UserLoginParams as UserLoginParams,
  };
}
