import { Link } from "react-router-dom";

import * as ROUTES from "../../../../constants/routes";

const SignIn = () => {
  return (
    <div className="SignIn">
      <h3>Sign In</h3>
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

        <div className="buttons">
          <button className="signup" type="submit">
            Sign In
          </button>
        </div>
        <div className="pw-links">
          <p className="google-signin">
            <span className="fab fa-google"></span>
            Sign In With Google
          </p>
          <p className="forgotPassword">
            <Link to={ROUTES.PASSWORD_FORGET}>Forgot password?</Link>
          </p>
          <p className="signup">
            New to Buy The Block? <Link to={ROUTES.SIGNUP}>Join now</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
