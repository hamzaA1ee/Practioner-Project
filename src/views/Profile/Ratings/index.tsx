// React Imports
import { IRatingsProps } from "@/types/Interfaces/formik.interface";
import { FC, Fragment } from "react";

//UI Imports
import { Aestrik } from "@/components/ui/aestrik";

const RatingsView: FC<IRatingsProps> = ({ formik }: { formik: any }) => {
  const handleRatings = (item: string, val: number) => {
    formik.setFieldValue(`ratings.${item}`, 5 - val + 1);
  };
  console.log("formik values below:");
  console.log(formik.values);
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="dob"
            >
              Please select which of the following you have used in the past and
              rate how well they worked for you. (out of 5 stars) <Aestrik />
            </label>
            {formik.errors?.ratings && (
              <p className="text-red-600 text-[12px] mt-2">
                {String(formik.errors?.ratings)}
              </p>
            )}
          </div>

          {Object.keys(formik.values.ratings).map((item: string) => (
            <div key={item} className="flex justify-between">
              <label
                key={item}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="ratings"
              >
                {item.charAt(0).toUpperCase() + item.substring(1, item.length)}
              </label>

              <div
                key={item}
                className="flex flex-row-reverse justify-end items-center"
              >
                {stars.map((val, extra = val) => (
                  <Fragment key={item}>
                    <input
                      key={item}
                      id="hs-ratings-readonly-1"
                      type="radio"
                      checked={5 - extra == formik.values.ratings[item]}
                      onClick={() => {
                        handleRatings(item, val);
                      }}
                      className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                      name={`ratings.${item}`}
                    />
                    <label
                      key={item}
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </form>
    </Fragment>
  );
};

export default RatingsView;
