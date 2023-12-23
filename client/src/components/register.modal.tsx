import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextInput } from ".";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { register, setModalType } from "../store/auth/authSlice";
import { registerInputs } from "../models";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const RegisterModal = () => {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector((state: RootState) => state.auth);

  const handleRegister = async (values: registerInputs) => {
    const { username, email, password } = values;
    const response = await dispatch(register({ username, email, password }));
    if (response.meta.requestStatus === "fulfilled") {
      console.log("Registration successfull!");
      formik.resetForm();
    }
    if (response.meta.requestStatus === "rejected") {
      console.log("Registration Error!");
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleAuthModal = () => {
    dispatch(setModalType("login"));
  };

  const visibleClass = show !== false ? "block" : "hidden";

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 z-20 flex ${visibleClass}`}
      style={{ backgroundColor: "rgba(0,0,0,.6)" }}
    >
      <div className="border border-dark-brightest_gray w-3/4 sm:w-1/2 md:w-1/4 bg-dark p-5 text-text mx-auto self-center rounded-lg">
        <h1 className="text-2xl mb-3">Sign Up</h1>

        <form action="" onSubmit={formik.handleSubmit}>
          <TextInput
            Label="Username"
            id="username"
            name="username"
            type="username"
            placeholder="Username"
            customStyles="mb-2 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={
              formik.touched.username && formik.errors.username
                ? formik.errors.username
                : undefined
            }
          />

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
          <Button filled label="Sign Up" styles="w-full mt-2 mb-2 rounded-md" />
        </form>
        <div>
          Already have an account?{" "}
          <button className="text-blue-600" onClick={handleAuthModal}>
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};
