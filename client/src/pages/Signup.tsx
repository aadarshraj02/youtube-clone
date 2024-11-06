import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Signup = (): JSX.Element => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .matches(
        /^[a-z0-9]*$/,
        "Username must contain only lowercase and numbers"
      )
      .required("Username is required"),
    fullName: Yup.string().required("Full Name is required"),
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

  return (
    <Formik
      initialValues={{
        username: "",
        fullName: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500"
          />
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <Field
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your Full Name"
          />
          <ErrorMessage
            name="fullName"
            component="div"
            className="text-red-500"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
        </div>
        <button type="submit">Signup</button>
      </Form>
    </Formik>
  );
};

export default Signup;
