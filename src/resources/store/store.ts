// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrderAPI from './order';
import { Order, OrderCreateParams, OrderCreateResponse, OrderRetrieveResponse } from './order';
import * as ReportsAPI from './reports/reports';
import {
  DailyInventory,
  InventoryResponse,
  Report,
  ReportEmbedResponse,
  ReportList,
  ReportListParams,
  ReportPauseParams,
  Reports,
  ReportsReportCursorPage,
} from './reports/reports';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Access to Petstore orders
 */
export class Store extends APIResource {
  order: OrderAPI.Order = new OrderAPI.Order(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);

  /**
   * Returns a map of status codes to quantities
   *
   * @example
   * ```ts
   * const response = await client.store.listInventory();
   * ```
   */
  listInventory(options?: RequestOptions): APIPromise<StoreListInventoryResponse> {
    return this._client.get('/store/inventory', options);
  }
}

export type StoreListInventoryResponse = { [key: string]: number };

Store.Order = Order;
Store.Reports = Reports;

export declare namespace Store {
  export { type StoreListInventoryResponse as StoreListInventoryResponse };

  export {
    Order as Order,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderCreateParams as OrderCreateParams,
  };

  export {
    Reports as Reports,
    type DailyInventory as DailyInventory,
    type InventoryResponse as InventoryResponse,
    type Report as Report,
    type ReportList as ReportList,
    type ReportEmbedResponse as ReportEmbedResponse,
    type ReportsReportCursorPage as ReportsReportCursorPage,
    type ReportListParams as ReportListParams,
    type ReportPauseParams as ReportPauseParams,
  };
}
