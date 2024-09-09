// React Imports
import React, { Fragment } from "react";

//Formik Imorts
import { FormikHelpers, useFormik } from "formik";

//Interfaces Imports
import { FormValues } from "@/types/Interfaces/formValues.interface";

// Next JS Imports
import Head from "next/head";

//View Imports
import ProfileView from "@/views/Profile";

const Profile = () => {
  return (
    <Fragment>
      <Head>
        {/* need an array of form name to update the tab title */}
        <title>Profile | Profile</title>
      </Head>
      <ProfileView />
    </Fragment>
  );
};

export default Profile;
