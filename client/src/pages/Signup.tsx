const Signup = (): JSX.Element => {
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
