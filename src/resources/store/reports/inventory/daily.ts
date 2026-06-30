// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReportsAPI from '../reports';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Access to Petstore orders
 */
export class Daily extends APIResource {
  /**
   * Returns daily inventory metrics for a generated report.
   *
   * @example
   * ```ts
   * const dailyInventory =
   *   await client.store.reports.inventory.daily.retrieve(
   *     '2019-12-27',
   *     { reportId: 'reportId' },
   *   );
   * ```
   */
  retrieve(
    date: string,
    params: DailyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ReportsAPI.DailyInventory> {
    const { reportId } = params;
    return this._client.get(path`/store/reports/${reportId}/inventory/daily/${date}`, options);
  }
}

export interface DailyRetrieveParams {
  /**
   * Report identifier.
   */
  reportId: string;
}

export declare namespace Daily {
  export { type DailyRetrieveParams as DailyRetrieveParams };
}
