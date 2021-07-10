import { Route, Switch } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import SignInAndSignUp from "./interaction/SignInAndSignUp/SignInAndSignUp";

import FooterNonAuth from "./static/FooterNonAuth/FooterNonAuth";
import HomeNonAuth from "./static/HomeNonAuth/HomeNonAuth";
import NavBarNonAuth from "./static/NavBarNonAuth/NavBarNonAuth";

const NonAuthApp = () => {
  return (
    <div className="NonAuthApp">
      <NavBarNonAuth />
      <main>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomeNonAuth} />
          <Route path={ROUTES.SIGNIN} component={SignInAndSignUp} />
        </Switch>
      </main>

      <FooterNonAuth />
    </div>
  );
};

export default NonAuthApp;
