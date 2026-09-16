// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AI extends APIResource {
  /**
   * Casing probe replicating context.dev: glued AIAI prefix (resource ai + method
   * ai_query) over plural and non-plural synthesized element mints
   */
  aiQuery(body: AIAIQueryParams, options?: RequestOptions): APIPromise<AIAIQueryResponse> {
    return this._client.post('/ai/query', { body, ...options });
  }
}

export interface AIAIQueryResponse {
  /**
   * Non-plural array on the response side
   */
  data_extracted?: Array<AIAIQueryResponse.DataExtracted>;

  /**
   * Plural array on the response side
   */
  matched_rules?: Array<AIAIQueryResponse.MatchedRule>;
}

export namespace AIAIQueryResponse {
  export interface DataExtracted {
    datapoint_value?: string;
  }

  export interface MatchedRule {
    match_score?: number;
  }
}

export interface AIAIQueryParams {
  /**
   * Non-plural array property: singularization is a no-op (decisive probe)
   */
  data_to_extract: Array<AIAIQueryParams.DataToExtract>;

  /**
   * The domain name to analyze
   */
  domain: string;

  /**
   * Digit-seam acronym parent for nested element mints
   */
  authentication_3ds?: AIAIQueryParams.Authentication3DS;

  /**
   * Non-plural map property with enum values (map-mint probe)
   */
  datapoint_object_schema?: { [key: string]: 'string' | 'number' | 'boolean' };

  /**
   * Plural array property: singularized element mint (control probe)
   */
  extraction_rules?: Array<AIAIQueryParams.ExtractionRule>;
}

export namespace AIAIQueryParams {
  export interface DataToExtract {
    datapoint_name: string;

    datapoint_type?: 'text' | 'number';
  }

  /**
   * Digit-seam acronym parent for nested element mints
   */
  export interface Authentication3DS {
    /**
     * Plural array under the 3DS seam
     */
    challenge_rules?: Array<Authentication3DS.ChallengeRule>;

    /**
     * Non-plural array under the 3DS seam
     */
    fallback_check?: Array<Authentication3DS.FallbackCheck>;
  }

  export namespace Authentication3DS {
    export interface ChallengeRule {
      challenge_kind?: string;
    }

    export interface FallbackCheck {
      check_name?: string;
    }
  }

  export interface ExtractionRule {
    rule_name?: string;

    rule_severity?: 'low' | 'high';
  }
}

export declare namespace AI {
  export { type AIAIQueryResponse as AIAIQueryResponse, type AIAIQueryParams as AIAIQueryParams };
}
