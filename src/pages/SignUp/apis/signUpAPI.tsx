import type { FormikValues } from "formik";
import useAxios from "../../../hooks/useAxios";
import type { AxiosResponse } from "axios";

export type SignUpAPIType = {
  status: string;
  message: string;
  user: {
    name: string;
    email: string;
    contact: string;
  };
  code: number;
};

export const signUpAPI = async (
  params: FormikValues
): Promise<SignUpAPIType | void> => {
  if (!params) return;

  try {
    const res: AxiosResponse<SignUpAPIType> = await useAxios.post(
      "/sign-up/newsletter",
      params
    );

    console.log(res.data);

    if (res.data?.status === "ok") {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};
