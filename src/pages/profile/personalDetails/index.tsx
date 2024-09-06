// React Imports
import React, { Fragment } from "react";

// View Import
import PersonalDetailsView from "@/views/Profile/PersonalDetails";
// Next JS Imports
import Head from "next/head";

const Login = () => {
  return (
    <Fragment>
      <Head>
        <title>Practioner | Personal Details</title>
      </Head>
      <PersonalDetailsView />
    </Fragment>
  );
};

export default Login;
