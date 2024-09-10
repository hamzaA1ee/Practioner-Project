// React Imports
import React, { Fragment } from "react";

//Formik Imorts

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
