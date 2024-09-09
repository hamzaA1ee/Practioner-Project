// React Imports
import { FC, Fragment } from "react";
import { IPersonalDetailsProps } from "@/types/Interfaces/formik.interface";
import { CldUploadWidget } from "next-cloudinary";

//ui imports
import { Aestrik } from "@/components/ui/aestrik";

//Next Imports
import Image from "next/image";
import { ContinueButton } from "@/components/ui/continueButton";

//default values
const medicalConditions: string[] = [
  "Hypertension",
  "Hypotension",
  "Diabetes Type 1",
  "Diabetes Type 2",
  "Hyperthyroidism",
  "Hypothyroidism",
  "Autoimmune condition (e.g., rheumatoid arthritis, lupus)",
  "Respiratory diseases (e.g., asthma, COPD)",
  "Liver diseases",
  "Kidney diseases",
  "History of strokes or transient ischemic attacks (TIA)",
  "HIV",
  "Hepatitis A",
  "Hepatitis B",
  "Hepatitis C",
  "Heart diseases",
  "Parkinson’s disease",
  "Multiple sclerosis",
  "Genetic disorders",
];
//initial values
const KEY = "NEXT_PUBLIC_CLOUDINARY_PRESET_NAME";

const PersonalDetailsView: FC<IPersonalDetailsProps> = ({ formik }) => {
  const handleClickButton = () => {
    formik.setFieldValue("personalDetails.image.secure_url", null);
  };

  console.log("for", formik);
  return (
    <Fragment>
      {/* <div className="overflow-hidden rounded-xl bg-white p-4 shadow"> */}
      {/* <form onSubmit={formik.handleSubmit}> */}
      <div className="flex items-center rounded-lg font-bold"></div>
      <p className="text-[26px] font-bold text-gray-900">Personal Details</p>

      {/* image picker starts */}
      {
        <div className="mt-4 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
          <div className="w-full">
            <p className="text-sm font-normal text-gray-900 mb-2">
              {"Uploaded Image" || "Upload Profile Image"}
              <Aestrik />
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            {formik.values.personalDetails.image?.secure_url ? (
              <div className="relative">
                <button
                  onClick={handleClickButton}
                  type="button"
                  name="personalDetails.image.secure_url"
                  value={""}
                  className="absolute m-3 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-3 w-3"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <Image
                  width={800}
                  height={200}
                  alt="profile picture"
                  className="w-full h-auto rounded-md"
                  src={formik.values.personalDetails.image?.secure_url}
                />
              </div>
            ) : (
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-[108px] border-2 border-black-300 border-dashed rounded-lg cursor-pointer bg-white-50 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-black-500 dark:text-black-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-black-500 dark:text-black-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-black-500 dark:text-black-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                {/* <p className="text-red-600">{formik)}</p> */}
                {/* <input id="dropzone-file" type="file" className="hidden" /> */}

                <CldUploadWidget
                  uploadPreset="k0hk2aqn"
                  onError={(error) => console.log(error)}
                  onSuccess={(result, { widget }) => {
                    formik.setFieldValue("personalDetails.image", result?.info); // { public_id, secure_url, etc }
                  }}
                  onQueuesEnd={(result, { widget }) => {
                    widget.close();
                  }}
                >
                  {({ open }) => {
                    function handleOnClick() {
                      formik.setFieldValue("personalDetails.image", undefined);
                      open();
                    }
                    return (
                      <button
                        className="hidden"
                        id="dropzone-file"
                        onClick={handleOnClick}
                      ></button>
                    );
                  }}
                </CldUploadWidget>
              </label>
            )}
          </div>
          {/*  //ends here */}
        </div>
      }
      {(formik.values.personalDetails.image?.secure_url == "" ||
        formik.values.personalDetails.image?.secure_url == null) && (
        <p className="text-red-600 text-[12px] mt-2">
          {formik.errors.image?.secure_url}
        </p>
      )}
      {/* image picker ends */}

      {/* below are the dob and locaiton btns */}
      <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
        <div className="w-full">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="dob"
          >
            Date of Birth
            <Aestrik />
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="date"
            placeholder="Enter your first name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="dob"
            name="personalDetails.dob"
            value={formik.values?.personalDetails.dob}
          />
          {formik.values.personalDetails.dob == "" && (
            <p className="text-red-600 text-[12px] mt-2">
              {formik.errors?.dob}
            </p>
          )}
        </div>

        <div className="w-full">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="location"
          >
            location
            <Aestrik />
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter Your Location"
            id="location"
            name="personalDetails.location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.personalDetails.location}
          />
          {formik.values.personalDetails.location == "" && (
            <p className="text-red-600 text-[12px] mt-2">
              {formik.errors?.location}
            </p>
          )}
        </div>

        {/* location and dob ends here */}
      </div>

      {/* //radion button starts */}
      <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
        <div className="col-span-2 grid">
          <div className="w-full">
            <p className="text-sm font-bold text-gray-900 mb-4">
              Do you have preference in gender for your therapist?
              <span className="text-red-500 font-bold ml-1">*</span>
            </p>
            {formik.values.personalDetails.gender == "" && (
              <p className="text-red-600 text-[12px] mt-2">
                {formik.errors?.gender}
              </p>
            )}

            <div className="flex items-center mb-4">
              <input
                checked
                id="default-radio-1"
                type="radio"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="male"
                name="personalDetails.gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="male"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Male
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-2"
                type="radio"
                value="female"
                onChange={formik.handleChange}
                name="personalDetails.gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="female"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Female
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value="both"
                onChange={formik.handleChange}
                name="personalDetails.gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="both"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Both
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* radio button ends */}

      {/* //checboxes */}

      <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
        <div className="w-full">
          <p className="text-sm font-bold text-gray-900 mb-4">
            System Issues
            <Aestrik />
          </p>
          {formik.values.personalDetails.issues.length == 0 && (
            <p className="text-red-600 text-[12px] mt-2">
              {formik.errors?.issue}
            </p>
          )}
        </div>

        <ul className="flex flex-wrap gap-4">
          {medicalConditions.map((item, index) => (
            <li
              key={index}
              className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-600 rounded-lg flex-shrink-0"
            >
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    checked={formik.values.personalDetails.issues.includes(
                      item
                    )}
                    id={`checkbox-${index}`}
                    name="personalDetails.issues"
                    value={item.toString()}
                    onChange={formik.handleChange}
                    type="checkbox"
                    className="w-5 cursor-pointer h-5 appearance-none border border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                </div>
                <label
                  htmlFor={`checkbox-${index}`}
                  className="ml-3.5 block text-sm font-normal text-gray-600 cursor-pointer"
                >
                  {item}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* </div> */}
      <button type="submit" className="text-white bg-black p-4">
        Submit
      </button>
      {/* </form>  */}
    </Fragment>
  );
};

export default PersonalDetailsView;
