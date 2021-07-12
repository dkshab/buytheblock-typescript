import * as React from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

import { auth } from "../../../../utilities/firebase";

import * as ROUTES from "../../../../constants/routes";

type SignInType = {
  [key: string]: string;
};

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [state, setState] = React.useState<SignInType>(initialState);
  const [error, setError] = React.useState<firebase.auth.Error | null>(null);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { email, password, confirmPassword } = state;

    if (email || password || password === confirmPassword) {
      try {
        await auth.createUserWithEmailAndPassword(email, password);
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
    <div className="SignUp">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email" className="item1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            aria-label="email"
            className="item2"
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
            id="password"
            aria-label="password"
            className="item2"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="confirmPassword" className="item1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            aria-label="confirmPassword"
            className="item2"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button className="signup" type="submit">
            Sign Up
          </button>
        </div>
        {error && <p className="help">{error.message}</p>}
        {/* <pre>{JSON.stringify(state, null, 2)}</pre>
        <pre>{JSON.stringify(error, null, 2)}</pre> */}
      </form>
    </div>
  );
};

export default SignUp;
