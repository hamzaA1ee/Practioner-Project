import {
  IPersonalDetails,
  IRatings,
  IIssues,
  ICancer,
} from "./profie.interface";

export interface FormValues {
  personalDetails: IPersonalDetails;
  ratings: IRatings;
  issues: IIssues;
  cancer: ICancer;
}
