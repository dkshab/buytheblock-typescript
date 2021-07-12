import { Route, Switch } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import NotFound from "../sharedComponents/NotFound/NotFound";
import SignIn from "./interaction/SignIn/SignIn";
import SignUp from "./interaction/SignUp/SignUp";

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
          <Route path={ROUTES.SIGNIN} component={SignIn} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <FooterNonAuth />
    </div>
  );
};

export default NonAuthApp;
