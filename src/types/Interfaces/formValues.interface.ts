import {
  IPersonalDetails,
  IRatings,
  IIssues,
  ICancer,
  IPayment,
} from "./profie.interface";

export interface FormValues {
  personalDetails: IPersonalDetails;
  ratings: IRatings;
  issues: IIssues;
  cancer: ICancer;
  payment: IPayment;
}
