// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InventoryAPI from './inventory/inventory';
import { Inventory } from './inventory/inventory';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, ReportCursorPage, type ReportCursorPageParams } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Access to Petstore orders
 */
export class Reports extends APIResource {
  inventory: InventoryAPI.Inventory = new InventoryAPI.Inventory(this._client);

  /**
   * Returns a generated store report.
   *
   * @example
   * ```ts
   * const report = await client.store.reports.retrieve(
   *   'reportId',
   * );
   * ```
   */
  retrieve(reportID: string, options?: RequestOptions): APIPromise<Report> {
    return this._client.get(path`/store/reports/${reportID}`, options);
  }

  /**
   * Returns a cursor-id paginated list of generated store reports.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const report of client.store.reports.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReportsReportCursorPage, Report> {
    return this._client.getAPIList('/store/reports', ReportCursorPage<Report>, { query, ...options });
  }

  /**
   * Returns an embeddable HTML representation of a store report.
   *
   * @example
   * ```ts
   * const response = await client.store.reports.embed(
   *   'reportId',
   * );
   * ```
   */
  embed(reportID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/store/reports/${reportID}/embed`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/html' }, options?.headers]),
    });
  }

  /**
   * Pauses a report generation job and returns an empty success response.
   *
   * @example
   * ```ts
   * await client.store.reports.pause('reportId');
   * ```
   */
  pause(
    reportID: string,
    params: ReportPauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/store/reports/${reportID}/pause`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type ReportsReportCursorPage = ReportCursorPage<Report>;

export interface DailyInventory {
  date: string;

  metrics: unknown;

  notes?: Array<string> | null;
}

export interface InventoryResponse {
  data: Array<InventoryResponse.Data>;
}

export namespace InventoryResponse {
  export interface Data {
    quantity: number;

    sku: string;

    attributes?: { [key: string]: string };

    petId?: number | null;
  }
}

export interface Report {
  id: string;

  createdAt: string;

  status: 'queued' | 'running' | 'complete' | 'failed';

  completedAt?: string | null;

  filters?: { [key: string]: unknown };

  totals?: { [key: string]: number };
}

export interface ReportList {
  data: Array<Report>;

  has_more: boolean;
}

export type ReportEmbedResponse = string;

export interface ReportListParams extends ReportCursorPageParams {}

export interface ReportPauseParams {
  /**
   * Unique key used to safely retry report mutations.
   */
  'Idempotency-Key'?: string;
}

Reports.Inventory = Inventory;

export declare namespace Reports {
  export {
    type DailyInventory as DailyInventory,
    type InventoryResponse as InventoryResponse,
    type Report as Report,
    type ReportList as ReportList,
    type ReportEmbedResponse as ReportEmbedResponse,
    type ReportsReportCursorPage as ReportsReportCursorPage,
    type ReportListParams as ReportListParams,
    type ReportPauseParams as ReportPauseParams,
  };

  export { Inventory as Inventory };
}
