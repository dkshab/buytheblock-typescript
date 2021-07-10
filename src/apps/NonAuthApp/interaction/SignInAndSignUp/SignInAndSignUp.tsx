import * as React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const SignInAndSignUp = () => {
  return (
    <div className="SignInAndSignUp">
      <SignIn />
      <hr />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
