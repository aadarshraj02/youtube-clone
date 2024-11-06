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
    <form>
      <div>
        <label htmlFor="">username</label>
        <input type="text" placeholder="username" />
      </div>
      <div>
        <label htmlFor="">Full Name</label>
        <input type="text" placeholder="Enter your full name" />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="text" placeholder="Enter a password" />
      </div>
    </form>
  );
};

export default Signup;
