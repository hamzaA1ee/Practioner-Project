import { object, string, number, date, InferType, array } from "yup";

export const personalDetailsSchema = object({
  dob: string().required("Date of Birth is required"),
  location: string().required("Location is required"),
  gender: string().required("Gender is required"),
  issue: array()
    .of(string())
    .required("Issues are required")
    .min(1, "atleast 1 is required, among given issues"),
  image: object({ secure_url: string().required("Image is required") }),
  // bsb: number().required("BSB Number is required").min(8, "Invalid Length"),
  // holder: string().required("Account Holder Name is Required"),
  // acc: number()
  //   .min(8, "Account Number is of 8 numbers")
  //   .required("Account Number is required"),
});
