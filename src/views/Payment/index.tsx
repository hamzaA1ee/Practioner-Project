// React Imports
import { IPaymentProps } from "@/types/Interfaces/formik.interface";
import { FC, Fragment } from "react";

//UI Imports
import { Aestrik } from "@/components/ui/aestrik";

const PaymentView: FC<IPaymentProps> = ({ formik }) => {
  console.log(formik.errors);
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        {/* holderName, accNumber and bsbNumber starts here */}
        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-1 md:space-y-0">
          <div className="w-full">
            <label
              className="text-2xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="dob"
            >
              Payment Details
            </label>
          </div>
        </div>
        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="dob"
            >
              Account Holder Name
              <Aestrik />
            </label>
            <input
              className="flex mt-2 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter Account Holder Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="dob"
              name="payment.holderName"
              value={formik.values?.payment.holderName}
            />
            {formik.values.payment.holderName == "" && (
              <p className="text-red-600 text-[12px] mt-2">
                {formik.errors?.holder}
              </p>
            )}
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="location"
            >
              BSB Number
              <Aestrik />
            </label>
            <input
              className="flex mt-2 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="number"
              placeholder="Enter BSB Number"
              id="location"
              name="payment.bsb"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={
                formik.values?.payment.bsb == 0 ? "" : formik.values.payment.bsb
              }
            />
            {formik.values.payment.bsb == 0 && (
              <p className="text-red-600 text-[12px] mt-2">
                {formik.errors?.bsb}
              </p>
            )}
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="location"
            >
              Account Number/IBAN Number
              <Aestrik />
            </label>
            <input
              className="flex mt-2  h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="number"
              placeholder="Enter Account Number/IBAN Number"
              id="location"
              name="payment.accountNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={
                formik.values?.payment.accountNumber == 0
                  ? ""
                  : formik.values.payment.accountNumber
              }
            />
            {formik.values.payment.accountNumber == 0 && (
              <p className="text-red-600 text-[12px] mt-2">
                {formik.errors?.acc}
              </p>
            )}
          </div>
          {/* holderName, accNumber and bsbNumber ends here */}
        </div>
        <button type="submit" className="text-white mt-4 bg-black p-4">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default PaymentView;
