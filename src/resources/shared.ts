// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as PetAPI from './pet/pet';

export interface Address {
  city?: string;

  geo?: Address.Geo;

  relatedCategory?: unknown;

  relatedCustomer?: unknown;

  relatedMoney?: Money;

  relatedOrder?: unknown;

  relatedPet?: PetAPI.Pet;

  relatedShelter?: unknown;

  relatedTag?: unknown;

  relatedUser?: unknown;

  state?: string;

  street?: string;

  zip?: string;
}

export namespace Address {
  export interface Geo {
    latitude: number;

    longitude: number;
  }
}

export interface Money {
  /**
   * Amount in minor currency units (e.g. cents).
   */
  amount: number;

  /**
   * ISO 4217 currency code.
   */
  currency: string;

  relatedAddress?: Address;

  relatedCategory?: unknown;

  relatedCustomer?: unknown;

  relatedOrder?: unknown;

  relatedPet?: PetAPI.Pet;

  relatedShelter?: unknown;

  relatedTag?: unknown;

  relatedUser?: unknown;
}
