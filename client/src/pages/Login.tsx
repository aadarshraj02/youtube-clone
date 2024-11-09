import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { login } from "../redux/slices/authSlice";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Login = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be of 6 characters")
      .max(16, "Password must not exceed 16 characters")
      .matches(
        /^(?=.*[a-z0-9])(?=.*[!@#$%^&*])/,
        "Password must contain a character a number or a special character"
      )
      .required("Password is required"),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    dispatch(login(values));
    navigate("/")
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className=" h-[85vh] w-full flex flex-col items-center justify-center px-10">
        <h2 className="text-zinc-700 uppercase text-2xl font-semibold mb-2">
          Login Form
        </h2>
        <p className="mb-5 text-sm text-zinc-400">
          Enter all the required fields and click on Login button for sign in to
          your account
        </p>
        <div className="flex flex-col w-[80vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw]">
          <label htmlFor="email" className="text-zinc-600 mb-2 text-xl">
            Enter your email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="outline-none border-b border-zinc-300 px-2 py-1 mb-3"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>
        <div className="flex flex-col w-[80vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw]">
          <label htmlFor="password" className="text-zinc-600 mb-2 text-xl">
            Enter your password
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="outline-none border-b border-zinc-300 px-2 py-1 mb-3"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white w-[80vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw] mt-5 rounded-lg text-lg hover:opacity-80 transition-all ease-linear duration-300"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default Login;