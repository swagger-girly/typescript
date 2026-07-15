// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Address {
  city?: string;

  geo?: Address.Geo;

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
}
