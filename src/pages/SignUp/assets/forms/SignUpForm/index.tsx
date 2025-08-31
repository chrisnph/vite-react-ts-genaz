import { useState } from "react";
import useForm from "../../../../../hooks/useForm";
import { initialValues, validationSchema } from "./schema";
import type { FormikHelpers, FormikValues } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { signUpAPI } from "../../../apis/signUpAPI";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitSignUp = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    try {
      setIsLoading(true);
      const res = await signUpAPI(values);

      if (res?.status === "ok") {
        actions.resetForm();
        navigate("/sign-up/success", {
          state: { name: values.name, email: values.email },
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm(initialValues, validationSchema, handleSubmitSignUp);

  return (
    <form onSubmit={form.handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5  text-gray-700"
        >
          Name
          <span className="pl-1 text-red-500">*</span>
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="name"
            name="name"
            placeholder="John Doe"
            type="text"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-[#3A8284] focus:border-[#3A8284] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            onChange={form.handleChange}
            value={form.values.name}
          />
        </div>
      </div>

      {form.errors.name && form.touched.name && (
        <div className="mt-1 ml-1 text-red-500 text-[10px]">
          {form.errors.name.toString()}
        </div>
      )}

      <div className="mt-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Email address
          <span className="pl-1 text-red-500">*</span>
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="email"
            name="email"
            placeholder="user@example.com"
            type="email"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-[#3A8284] focus:border-[#3A8284] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            onChange={form.handleChange}
            value={form.values.email}
          />
        </div>
      </div>

      {form.errors.email && form.touched.email && (
        <div className="mt-1 ml-1 text-red-500 text-[10px]">
          {form.errors.email.toString()}
        </div>
      )}

      <div className="mt-6">
        <label
          htmlFor="contact"
          className="block text-sm font-medium leading-5  text-gray-700"
        >
          Contact
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="contact"
            name="contact"
            placeholder="01112223333"
            type="text"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-[#3A8284] focus:border-[#3A8284] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            onChange={form.handleChange}
            value={form.values.contact}
          />
        </div>

        {form.errors.contact && form.touched.contact && (
          <div className="mt-1 ml-1 text-red-500 text-[10px]">
            {form.errors.contact.toString()}
          </div>
        )}

        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button
              disabled={isLoading}
              type="submit"
              className="h-[38px] w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-b from-[#64D4D2] to-[#3C8586] transition duration-1000 ease-in-out cursor-pointer hover:from-[#3C8586] hover:to-[#64D4D2]"
            >
              {!isLoading ? (
                "Sign Up"
              ) : (
                <FontAwesomeIcon
                  icon={faSpinner}
                  spin
                  className="text-[#64D4D2]"
                />
              )}
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
