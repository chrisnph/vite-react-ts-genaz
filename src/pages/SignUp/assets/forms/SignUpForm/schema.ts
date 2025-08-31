import { object, string } from "yup";

export const initialValues = {
  name: "",
  email: "",
  contact: "",
};

export const validationSchema = object({
  name: string()
    .required("Name is required")
    .min(3, "Name needs to be at least 3 characters"),
  email: string().required("Email is required").email("Invalid email format"),
  contact: string()
    .notRequired()
    .matches(/^(\+?60|0)(1[0-46-9][0-9]{7,8}|[3-9][0-9]{7,8})$/, {
      message: "Invalid Malaysian contact number",
      excludeEmptyString: true,
    }),
});
