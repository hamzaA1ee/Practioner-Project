// React Imports
import { IFormProps } from "@/types/Interfaces/formik.interface";
import { FC, Fragment } from "react";

//Next Imports

import Image from "next/image";

const ReviewView: FC<IFormProps> = ({ formik }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  const issues = ["Head and Neck", "Torso", "Pelvis", "Arms", "Legs"];
  return (
    <Fragment>
      <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
        {/* //presonal details starts */}
        <div className="w-full">
          <label
            className="text-2xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="dob"
          >
            Personal Details
          </label>
        </div>
        <div className="w-full">
          <label
            className="text-sm  font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="uploadImage"
          >
            Uploaded Image:
          </label>
          <div className="mt-4 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
            <div className="flex items-start justify-start w-full">
              <Image
                width={300}
                height={150}
                alt="profile picture"
                className="rounded-md"
                src={formik.values.personalDetails.image?.secure_url}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
          <div className="w-full">
            <label
              className="text-sm  font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="dob"
            >
              Date of Birth:{" "}
              <span className="font-medium">
                {formik.values.personalDetails.dob}
              </span>
            </label>
          </div>
          <div className="w-full">
            <label
              className="text-sm  font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="location"
            >
              Location:{" "}
              <span className="font-medium">
                {formik.values.personalDetails.location}
              </span>
            </label>
          </div>

          <div className="w-full">
            <label
              className="text-sm  font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="gender"
            >
              Gender:{" "}
              <span className="font-medium">
                {formik.values.personalDetails.gender.charAt(0).toUpperCase() +
                  formik.values.personalDetails.gender.substring(
                    1,
                    formik.values.personalDetails.gender.length
                  )}
              </span>
            </label>
          </div>
        </div>
        <div className="w-full">
          <label
            className="text-sm  font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="gender"
          >
            System Issues:{" "}
            <span className="font-medium">
              {formik.values.personalDetails.issue.map((item, index) =>
                index == formik.values.personalDetails.issue.length - 1
                  ? item
                  : item + ", "
              )}
            </span>
          </label>
        </div>
        {/* personal details ends */}
        <hr className="h-px my-4 bg-custom-gray border-1 dark:bg-gray-700" />
        {/* rating starts here */}
        <div className="w-full mt-2">
          <label
            className="text-2xl  font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="dob"
          >
            Ratings
          </label>
        </div>
        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
          {Object.keys(formik.values.ratings).map(
            (item: string, index: number) => (
              <div className="flex justify-between">
                {formik.values.ratings[item] > 0 && (
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="ratings"
                  >
                    {item.charAt(0).toUpperCase() +
                      item.substring(1, item.length)}
                  </label>
                )}

                <div className="flex flex-row-reverse justify-end items-center">
                  {stars.map((val, extra = val) => (
                    <Fragment>
                      {formik.values.ratings[item] >= 1 ? (
                        <Fragment>
                          <input
                            id="hs-ratings-readonly-1"
                            type="radio"
                            checked={5 - extra == formik.values.ratings[item]}
                            className="peer -ms-5 size-5 bg-transparent border-0 text-transparent appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                            name={`ratings.${item}`}
                          />
                          <label
                            htmlFor="hs-ratings-readonly-1"
                            className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600"
                          >
                            <svg
                              className="shrink-0 size-5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </label>
                        </Fragment>
                      ) : null}
                    </Fragment>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
        <hr className="h-px my-4 bg-custom-gray border-1" />
        {/* rating ends here */}
        <div className="w-full mt-2">
          <label
            className="text-2xl  font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="dob"
          >
            Issues
          </label>
        </div>
        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
          {Object.keys(formik.values.issues).map(
            (item: string, index: number) => (
              <Fragment>
                {" "}
                {formik.values.issues[item] == true ? (
                  <div className="flex items-center mb-4 h-[42px]">
                    <input
                      checked
                      id="default-checkbox"
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-medium text-black-900 dark:text-black-300"
                    >
                      {issues[index] + ` issues`}
                    </label>
                  </div>
                ) : null}
              </Fragment>
            )
          )}
        </div>
        <hr className="h-px my-4 bg-custom-gray border-1 dark:bg-gray-700" />
      </div>
    </Fragment>
  );
};

export default ReviewView;
