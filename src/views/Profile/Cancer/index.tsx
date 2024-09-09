// React Imports
import { ICancerProps } from "@/types/Interfaces/formik.interface";
import { FC, Fragment } from "react";

//ui Imports
import { Aestrik } from "@/components/ui/aestrik";

const CancerView: FC<ICancerProps> = ({ formik }) => {
  const treatments = [
    "ChemeoTherapy & Radiation",
    "ChemeoTherapy",
    "Radiation",
    "Removal Of Cancer With Course of Chemo & Radiation, Natural",
  ];
  const diagnosedAnswers = ["Yes", "No"];
  const handleChange = (item: string) => {
    formik.setFieldValue("cancer.diagnosed", item == "Yes" ? true : false);
  };

  return (
    <Fragment>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
        <div className="w-full">
          <label
            className="text-2xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="dob"
          >
            Have You Ever Been Diagnosed With Cancer?
            <Aestrik />
          </label>
        </div>
        <div className="flex items-center justify-between max-w-sm">
          {diagnosedAnswers.map((item) => (
            <div
              key={item}
              className="flex justify-between items-center mt-3 max-w-lg"
            >
              <div className="flex items-center mb-4">
                <input
                  id={`radio-${item}`}
                  type="radio"
                  checked={
                    (item === "Yes" &&
                      formik.values.cancer.diagnosed === true) ||
                    (item === "No" && formik.values.cancer.diagnosed === false)
                  }
                  onChange={() => {
                    handleChange(item);
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`radio-${item}`}
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300"
                >
                  {item}
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <label
            className="text-2xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="location"
          >
            Location
            <Aestrik />
          </label>
        </div>
        <div className="mt-6 pb-5 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
          <div className="w-full ">
            <label
              className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="dob"
            >
              Location
            </label>
            <input
              className="mt-4 flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="location"
              name="cancer.location"
              value={formik.values?.cancer.location}
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-3">
        <label
          className="text-2xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="specifiedTreatment"
        >
          Specify Treatment
        </label>
      </div>

      <div className="mt-6 pb-5 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
        {treatments.map((item) => (
          <div className="flex justify-items-center mb-2">
            <input
              id={`radio-${item}`}
              type="radio"
              value={item}
              checked={formik.values.cancer.specifiedTreatment == item}
              name="cancer.specifiedTreatment"
              onChange={formik.handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={`radio-${item}`}
              className="ms-2 text-sm font-medium text-gray-900 dark:text-black-300"
            >
              {item}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-6 pb-5 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
        <div className="w-full ">
          <label
            className="text-sm mb  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="dob"
          >
            Anything else you wish to let us to know
          </label>
          <textarea
            className="flex h-[120px] mt-4 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Write Somthing"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="wish"
            name="cancer.wish"
            value={formik.values?.cancer.wish}
          />
        </div>
      </div>
      {/* </form> */}
    </Fragment>
  );
};

export default CancerView;
