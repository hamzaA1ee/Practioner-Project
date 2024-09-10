// React Imports
import { IIssuesProps } from "@/types/Interfaces/formik.interface";
import { FC, Fragment } from "react";

const issues = ["Head and Neck", "Torso", "Pelvis", "Arms", "Legs"];
const IssuesView: FC<IIssuesProps> = ({ formik }) => {
  const handleClick = (item: string) => {
    formik.setFieldValue(
      `issues.${item}`,
      formik.values.issues[item] ? false : true
    );
    console.log("issues...");
    console.log(formik.values.issues);
  };
  return (
    <Fragment>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
        <div className="w-full">
          {" "}
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="dob"
          >
            Select Issues
          </label>
        </div>
        <div>
          {Object.keys(formik.values.issues).map(
            (item: string, index: number) => (
              <div className="flex items-center mb-4 h-[42px]">
                <input
                  checked={formik.values.issues[item] == true}
                  id="default-checkbox"
                  type="checkbox"
                  onChange={() => handleClick(item)}
                  className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-black-900 dark:text-black-300"
                >
                  {issues[index] + ` issues`}
                </label>
              </div>
            )
          )}
        </div>
      </div>
      {/* <button className="p-4 bg-black text-white" type="submit">
          Submit
        </button> */}
      {/* </form> */}
    </Fragment>
  );
};

export default IssuesView;
