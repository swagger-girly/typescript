// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface SystemHealth {
  checkedAt: string;

  status: 'ok' | 'degraded' | 'down';

  /**
   * Per-service health keyed by service name.
   */
  services?: { [key: string]: SystemHealth.Services };
}

export namespace SystemHealth {
  export interface Services {
    status: 'ok' | 'degraded' | 'down';

    lastIncident?: Services.LastIncident;

    latencyMs?: number;
  }

  export namespace Services {
    export interface LastIncident {
      openedAt?: string;

      resolution?: string | LastIncident.IncidentReference;
    }

    export namespace LastIncident {
      export interface IncidentReference {
        incidentId: string;

        url?: string;
      }
    }
  }
}

export interface RetrieveRateLimitsResponse {
  remaining: number;

  resetAt: string;

  tiers?: Array<RetrieveRateLimitsResponse.Tier>;
}

export namespace RetrieveRateLimitsResponse {
  export interface Tier {
    name: string;

    quota?: Tier.Quota;
  }

  export namespace Tier {
    export interface Quota {
      requests?: number;

      window?: string;
    }
  }
}

export declare namespace TopLevel {
  export { type SystemHealth as SystemHealth, type RetrieveRateLimitsResponse as RetrieveRateLimitsResponse };
}
