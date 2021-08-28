import React, { Suspense } from "react";

import NonAuthApp from "./NonAuthApp/NonAuthApp";

import "../sass/styles.scss";

import { useCurrentUserValue } from "../context";
import Spinner from "./sharedComponents/Spinner";
import AuthApp from "./AuthApp/AuthApp";

function Application() {
  const currentUser = useCurrentUserValue();
  // console.log(currentUser);

  return (
    <div className="Application--Controller">
      <Suspense fallback={<Spinner />}>
        {currentUser ? <AuthApp /> : <NonAuthApp />}
      </Suspense>
    </div>
  );
}

export default Application;
