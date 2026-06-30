// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReportsAPI from '../reports';
import * as DailyAPI from './daily';
import { Daily, DailyRetrieveParams } from './daily';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Access to Petstore orders
 */
export class Inventory extends APIResource {
  daily: DailyAPI.Daily = new DailyAPI.Daily(this._client);

  /**
   * Returns inventory rows associated with a store report.
   *
   * @example
   * ```ts
   * const inventoryResponse =
   *   await client.store.reports.inventory.list('reportId');
   * ```
   */
  list(reportID: string, options?: RequestOptions): APIPromise<ReportsAPI.InventoryResponse> {
    return this._client.get(path`/store/reports/${reportID}/inventory`, options);
  }
}

Inventory.Daily = Daily;

export declare namespace Inventory {
  export { Daily as Daily, type DailyRetrieveParams as DailyRetrieveParams };
}
