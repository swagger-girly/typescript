// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Veterinary extends APIResource {}

export interface MedicalSummary {
  petId: number;

  /**
   * Provenance stamp attached to records across unrelated resources.
   */
  audit?: MedicalSummary.Audit;

  conditions?: Array<MedicalSummary.Condition>;

  vaccinations?: Array<VaccinationRecord>;
}

export namespace MedicalSummary {
  /**
   * Provenance stamp attached to records across unrelated resources.
   */
  export interface Audit {
    recordedAt: string;

    recordedBy?: string;

    source?: 'manual' | 'import' | 'system';
  }

  export interface Condition {
    code: string;

    severity?: 'mild' | 'moderate' | 'severe';

    treatment?: Condition.Treatment;
  }

  export namespace Condition {
    export interface Treatment {
      medications?: Array<Treatment.Medication>;

      plan?: string;
    }

    export namespace Treatment {
      export interface Medication {
        name: string;

        /**
         * Free-form dosage text or a structured dosage.
         */
        dosage?: string | Medication.StructuredDosage;
      }

      export namespace Medication {
        export interface StructuredDosage {
          amount: number;

          unit: string;

          frequency?: string;
        }
      }
    }
  }
}

export interface VaccinationRecord {
  id: string;

  administeredAt: string;

  vaccine: string;

  /**
   * Provenance stamp attached to records across unrelated resources.
   */
  audit?: VaccinationRecord.Audit;

  boosterSchedule?: Array<VaccinationRecord.BoosterSchedule>;

  veterinarian?: VaccinationRecord.Veterinarian;
}

export namespace VaccinationRecord {
  /**
   * Provenance stamp attached to records across unrelated resources.
   */
  export interface Audit {
    recordedAt: string;

    recordedBy?: string;

    source?: 'manual' | 'import' | 'system';
  }

  export interface BoosterSchedule {
    due: string;

    completed?: boolean;

    dose?: number | string;
  }

  export interface Veterinarian {
    license?: Veterinarian.License;

    name?: string;
  }

  export namespace Veterinarian {
    export interface License {
      number?: string;

      region?: string;
    }
  }
}

export declare namespace Veterinary {
  export { type MedicalSummary as MedicalSummary, type VaccinationRecord as VaccinationRecord };
}
