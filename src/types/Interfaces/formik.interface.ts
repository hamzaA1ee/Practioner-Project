import { FormikProps } from "formik";
import { FormValues } from "./formValues.interface";

export interface IPersonalDetailsProps {
  formik: FormikProps<FormValues>;
}

export interface IRatingsProps {
  formik: FormikProps<FormValues>;
}

export interface IIssuesProps {
  formik: FormikProps<FormValues>;
}

export interface ICancerProps {
  formik: FormikProps<FormValues>;
}

export interface IPaymentProps {
  formik: FormikProps<FormValues>;
}
