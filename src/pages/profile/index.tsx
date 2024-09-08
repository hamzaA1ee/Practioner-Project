// React Imports
import React, { Fragment, useState } from "react";

//Formik Imorts
import { FormikHelpers, useFormik } from "formik";

//Interfaces Imports
import { FormValues } from "@/types/Interfaces/formValues.interface";
// View Import
import PersonalDetailsView from "@/views/Profile/PersonalDetails";
import RatingsView from "@/views/Profile/Ratings";
import IssuesView from "@/views/Profile/Issues";
import CancerView from "@/views/Profile/Cancer";
import PaymentView from "@/views/Payment";
// Next JS Imports
import Head from "next/head";

const Profile = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

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
      issues: {
        headAndNeck: false,
        torso: false,
        pelvis: false,
        arms: false,
        legs: false,
      },
      cancer: {
        diagnosed: false,
        location: "",
        specifiedTreatment: "",
        wish: "",
      },
      payment: {
        bsb: 0,
        accountNumber: 0,
        holderName: "",
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
        {/* need an array of form name to update the tab title */}
        <title>Profile | Personal Details</title>
      </Head>

      <div className="mx-auto w-full max-w-7xl py-2 flex items-center justify-center">
        <div className="mx-auto my-4 max-w-2xl min-w-2xl md:my-6 ">
          <div className="flex items-center justify-between">
            <div className="overflow-hidden rounded-xl bg-white p-4 shadow min-w-[42rem]">
              <div className="w-full">
                <label
                  className="text-[32px] font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="dob"
                >
                  Complete Profile
                </label>
                <hr className="h-px my-4 bg-custom-gray border-1 dark:bg-gray-700" />
              </div>

              {step == 1 && <PersonalDetailsView formik={formik} />}
              {step == 2 && <RatingsView formik={formik} />}
              {step == 3 && <IssuesView formik={formik} />}
              {step == 4 && <CancerView formik={formik} />}
              {step == 5 && <PaymentView formik={formik} />}

              <div className="flex mt-4 items-end w-full justify-end  ">
                {step < 5 ? (
                  <button
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setStep(step + 1);
                        setLoading(false);
                      }, 500);
                    }}
                    className="w-[209px] h-[56px] h- mt-4 text-white bg-black rounded-md"
                  >
                    {loading ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Continue"
                    )}
                  </button>
                ) : (
                  <button className="p-4 mt-4 text-white bg-black">
                    Finish
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
