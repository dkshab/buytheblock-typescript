import * as React from "react";
import { useHistory, Link } from "react-router-dom";
import firebase from "firebase/app";

import * as ROUTES from "../../../../constants/routes";
import { auth } from "../../../../utilities/firebase";

type SignUpType = {
  [key: string]: string;
};

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [state, setState] = React.useState<SignUpType>(initialState);
  const [error, setError] = React.useState<firebase.auth.Error | null>(null);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { email, password } = state;

    if (email || password) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        clear();
        history.push(ROUTES.HOME);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    } else {
      console.log("Here: ");
    }
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <div className="SignIn">
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email" className="item1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email-signin"
            className="item2"
            aria-label="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password" className="item1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password-signin"
            className="item2"
            aria-label="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button className="signup" type="submit">
            Sign In
          </button>
        </div>

        {error && <p className="help">{error.message}</p>}
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
      </form>{" "}
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </div>
  );
};

export default SignIn;
