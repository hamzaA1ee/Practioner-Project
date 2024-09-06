// React Imports
import React, { Fragment, FC } from "react";

// View Import
import PersonalDetailsView from "@/views/Profile/PersonalDetails";
//formik imports
import { FormValues } from "@/types/Interfaces/formValues.interface";
import { FormikProps } from "formik";
// Next JS Imports
import Head from "next/head";
interface personalDetailsProps {
  formik: FormikProps<FormValues>;
}
const PersonalDetails: FC<personalDetailsProps> = ({ formik }) => {
  return (
    <Fragment>
      <Head>
        <title>Practioner | Personal Details</title>
      </Head>
      <PersonalDetailsView formik={formik} />
    </Fragment>
  );
};

export default PersonalDetails;
