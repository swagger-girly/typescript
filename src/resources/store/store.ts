// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as PetAPI from '../pet/pet';
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
import { path } from '../../internal/utils/path';

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

  /**
   * Returns a single activity feed entry. The response is a discriminated union
   * whose arms each compose the public `Pet` model, so every arm is minted under the
   * response's namespace and must inherit rather than flatten.
   *
   * @example
   * ```ts
   * const response = await client.store.retrieveActivity(
   *   'activityId',
   * );
   * ```
   */
  retrieveActivity(activityID: string, options?: RequestOptions): APIPromise<StoreRetrieveActivityResponse> {
    return this._client.get(path`/store/activity/${activityID}`, options);
  }
}

export type StoreListInventoryResponse = { [key: string]: number };

/**
 * A store activity feed entry. Every arm composes the public `Pet` model, so each
 * one is minted under the response's namespace and inherits from `Pet` instead of
 * re-minting its inline type tree.
 */
export type StoreRetrieveActivityResponse =
  | StoreRetrieveActivityResponse.StoreActivityListed
  | StoreRetrieveActivityResponse.StoreActivitySold
  | StoreRetrieveActivityResponse.StoreActivityArchived
  | StoreRetrieveActivityResponse.StoreActivityTransferred;

export namespace StoreRetrieveActivityResponse {
  /**
   * Listing activity. Widens the base's `status` enum with a member `Pet` does not
   * declare, so the heritage clause has to omit the redeclared key instead of
   * extending the base plainly.
   */
  export interface StoreActivityListed extends Omit<PetAPI.Pet, 'status'> {
    activityId: string;

    family: 'listed';

    recordedAt: string;

    status: 'available' | 'pending' | 'sold' | 'archived';
  }

  /**
   * Sale activity. Pins the base's `status` to a single member — a provable
   * narrowing, so this arm keeps a plain `extends` with no omitted keys.
   */
  export interface StoreActivitySold extends Omit<PetAPI.Pet, 'status'> {
    activityId: string;

    family: 'sold';

    recordedAt: string;

    status: 'sold';
  }

  /**
   * Archival activity. Narrows the base's `status` by value but also makes it
   * nullable, which `Pet` does not accept — a value subset alone is not enough to
   * keep a plain `extends` here.
   */
  export interface StoreActivityArchived extends Omit<PetAPI.Pet, 'status'> {
    activityId: string;

    family: 'archived';

    recordedAt: string;

    archivedReason?: string;

    status?: 'sold' | null;
  }

  /**
   * Transfer activity. Reaches `Pet` only through the pass-through wrapper branch,
   * so the base is resolvable only transitively.
   */
  export interface StoreActivityTransferred extends PetAPI.Pet {
    family: 'transferred';

    transferredTo?: StoreActivityTransferred.TransferredTo;
  }

  export namespace StoreActivityTransferred {
    export interface TransferredTo {
      name: string;

      address?: Shared.Address;

      contact?: TransferredTo.Contact;

      location?: TransferredTo.Location;
    }

    export namespace TransferredTo {
      export interface Contact {
        primary?: Contact.Primary;
      }

      export namespace Contact {
        export interface Primary {
          availability?: Primary.Availability;

          name?: string;

          phone?: string;
        }

        export namespace Primary {
          export interface Availability {
            weekday?: Availability.Weekday;

            weekend?: Availability.Weekend | null;
          }

          export namespace Availability {
            export interface Weekday {
              close?: string;

              open?: string;
            }

            export interface Weekend {
              close?: string;

              open?: string;
            }
          }
        }
      }

      export interface Location {
        latitude: number;

        longitude: number;
      }
    }
  }
}

Store.Order = Order;
Store.Reports = Reports;

export declare namespace Store {
  export {
    type StoreListInventoryResponse as StoreListInventoryResponse,
    type StoreRetrieveActivityResponse as StoreRetrieveActivityResponse,
  };

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
