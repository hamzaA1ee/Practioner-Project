// React Imports
import React, { Fragment } from "react";

//Formik Imorts
import { FormikHelpers, useFormik } from "formik";

//Interfaces Imports
import { FormValues } from "@/types/Interfaces/formValues.interface";
// View Import
import PersonalDetails from "./personalDetails";
// Next JS Imports
import Head from "next/head";

const Profile = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      personalDetails: {
        image: "alksdfjla",
        location: "jalksdfjl",
        dob: "",
        gender: "male",
        issues: [],
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
      <PersonalDetails formik={formik} />
    </Fragment>
  );
};

export default Profile;
