import {Customer} from '../customer/customer';
import {Facility} from '../facility/facility';

export interface Contract {
  id?: number;
  customer: Customer;
  Facility: Facility;
  startDate: Date;
  endDate: Date;
  deposit: number;
}
