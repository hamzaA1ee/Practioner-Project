import { object, string, number, array, boolean } from "yup";

export const personalDetails = object({
  image: object({
    secure_url: string().required("Image is required"),
  }),
  location: string().required("Location is required"),
  dob: string().required("Date of Birth is required"),
  gender: string().required("Gender is required"),
  issue: array()
    .of(string())
    .required("Issues are required")
    .min(1, "At least 1 issue is required"),
});

export const ratings = object({
  acupuncturist: number().min(0).max(5),
  remedialMessageTherapist: number().min(0).max(5),
  chiropractor: number().min(0).max(5),
  myotherapist: number().min(0).max(5),
  physiotherapist: number().min(0).max(5),
  osteopath: number().min(0).max(5),
}).test(
  "at-least-one-rating",
  "At least one rating must be provided",
  function (values) {
    const {
      acupuncturist,
      remedialMessageTherapist,
      chiropractor,
      myotherapist,
      physiotherapist,
      osteopath,
    } = values;

    if (
      !acupuncturist ||
      !remedialMessageTherapist ||
      !chiropractor ||
      !myotherapist ||
      !physiotherapist ||
      !osteopath
    ) {
      throw new Error("Fields not defeined");
    }
    // Check if at least one value is greater than 0
    return (
      acupuncturist > 0 ||
      remedialMessageTherapist > 0 ||
      chiropractor > 0 ||
      myotherapist > 0 ||
      physiotherapist > 0 ||
      osteopath > 0
    );
  }
);
export const issues = object({
  headAndNeck: boolean(),
  torso: boolean(),
  pelvis: boolean(),
  arms: boolean(),
  legs: boolean(),
});
export const payment = object({
  bsb: number().min(8, "Invalid Length").required("BSB Number is required"),
  accountNumber: number()
    .min(8, "Account Number is of 8 numbers")
    .required("Account Number is required"),
  holderName: string().required("Account Holder Name is Required"),
});
export const cancer = object({
  diagnosed: string().required("Please Select, Whether Diagnosed or Not"),
  location: string().required("Location is required"),
  specifiedTreatment: string(),
  wish: string(),
});

export const personalDetailsSchema = object({
  personalDetails: personalDetails,
});

export const ratingSchema = object({
  ratings: ratings,
});

export const cancerSchema = object({
  cancer: cancer,
});

export const paymentSchema = object({
  payment: payment,
});

export const issueSchema = object({
  issues: issues,
});
