const SignUp = () => {
  return (
    <div className="SignUp">
      <form action="">
        <div className="field">
          <label htmlFor="email" className="item1">
            Email
          </label>
          <input type="email" name="email" className="item2" />
        </div>
        <div className="field">
          <label htmlFor="password" className="item1">
            Password
          </label>
          <input type="password" name="password" className="item2" />
        </div>
        <div className="field">
          <label htmlFor="confirmPassword" className="item1">
            Confirm Password
          </label>
          <input type="text" name="confirmPassword" className="item2" />
        </div>
        <div className="buttons">
          <button className="signup" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
