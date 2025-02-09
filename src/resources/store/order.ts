// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OrderResource extends APIResource {
  /**
   * Place a new order in the store
   */
  create(body: OrderCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Order> {
    return this._client.post('/store/order', { body, ...options });
  }

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will
   * generate exceptions.
   */
  retrieve(orderID: number, options?: RequestOptions): APIPromise<Order> {
    return this._client.get(path`/store/order/${orderID}`, options);
  }

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or
   * nonintegers will generate API errors
   */
  delete(orderID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/store/order/${orderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Order {
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

export declare namespace OrderResource {
  export { type Order as Order, type OrderCreateParams as OrderCreateParams };
}
