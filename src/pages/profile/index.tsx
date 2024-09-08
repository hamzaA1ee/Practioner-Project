// React Imports
import React, { Fragment } from "react";

//Formik Imorts
import { FormikHelpers, useFormik } from "formik";

//Interfaces Imports
import { FormValues } from "@/types/Interfaces/formValues.interface";
// View Import

// Next JS Imports
import Head from "next/head";
import PersonalDetailsView from "@/views/Profile/PersonalDetails";
import RatingsView from "@/views/Profile/Ratings";

const Profile = () => {
  const forms = ["Personal Details", "Ratings"];
  const formik = useFormik<FormValues>({
    initialValues: {
      personalDetails: {
        image: { secure_url: "" },
        location: "",
        dob: "",
        gender: "male",
        issues: [],
      },
      ratings: {
        acupuncturist: 0,
        remedialMessageTherapist: 0,
        chiropractor: 0,
        myotherapist: 0,
        physiotherapist: 0,
        osteopath: 0,
      },
    },
    onSubmit: (
      values: FormValues,
      formikHelpers: FormikHelpers<FormValues>
    ) => {
      console.log("working....");
      console.log(values);
    },
  });
  return (
    <Fragment>
      <Head>
        <title>Profile | Personal Details</title>
      </Head>

      <div className="mx-auto w-full max-w-7xl py-2">
        <div className="mx-auto my-4 max-w-2xl md:my-6">
          {/* <PersonalDetailsView formik={formik} /> */}
          <RatingsView formik={formik} />
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
