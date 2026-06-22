// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Access to Petstore orders
 */
export class Order extends APIResource {
  /**
   * Place a new order in the store
   *
   * @example
   * ```ts
   * const order = await client.store.order.create();
   * ```
   */
  create(
    body: OrderCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderCreateResponse> {
    return this._client.post('/store/order', { body, ...options });
  }

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will
   * generate exceptions.
   *
   * @example
   * ```ts
   * const order = await client.store.order.retrieve(0);
   * ```
   */
  retrieve(orderID: number, options?: RequestOptions): APIPromise<OrderRetrieveResponse> {
    return this._client.get(path`/store/order/${orderID}`, options);
  }

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or
   * nonintegers will generate API errors
   *
   * @example
   * ```ts
   * await client.store.order.delete(0);
   * ```
   */
  delete(orderID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/store/order/${orderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrderCreateResponse {
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

export interface OrderRetrieveResponse {
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

export interface OrderCreateParams {
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

export declare namespace Order {
  export {
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderCreateParams as OrderCreateParams,
  };
}
