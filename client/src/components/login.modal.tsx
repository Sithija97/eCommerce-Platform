import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextInput } from ".";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setModalType: Dispatch<SetStateAction<string>>;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const LoginModal = ({ setModalType }: IProps) => {
  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleAuthModal = () => {
    setModalType("register");
  };

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-20 flex"
      style={{ backgroundColor: "rgba(0,0,0,.6)" }}
    >
      <div className="border border-dark-brightest_gray w-3/4 sm:w-1/2 md:w-1/4 bg-dark p-5 text-text mx-auto self-center rounded-lg">
        <h1 className="text-2xl mb-3">Login</h1>

        <form action="" onSubmit={formik.handleSubmit}>
          <TextInput
            Label="Email Address"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            customStyles="mb-2 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : undefined
            }
          />

          <TextInput
            Label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            customStyles="mb-2 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : undefined
            }
          />
          <Button filled label="Sign In" styles="w-full mt-2 mb-2 rounded-md" />
        </form>
        <div>
          New to Reddit?{" "}
          <button className="text-blue-600" onClick={handleAuthModal}>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};
