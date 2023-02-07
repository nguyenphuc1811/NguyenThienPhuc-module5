import {RentType} from './rent-type';
import {FacilityType} from './facility-type';

export interface Facility {
  id?: number;
  name?: string;
  rentType?: RentType;
  facilityType?: FacilityType;
  area?: number;
  cost?: number;
  maxPeople?: number;
  standardRoom?: string;
  description?: string;
  poolArea?: number;
  floor?: number;
  facilityFree?: string;
}
