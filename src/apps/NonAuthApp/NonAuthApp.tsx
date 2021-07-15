import { Route, Switch } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import NotFound from "../sharedComponents/NotFound/NotFound";
import SignIn from "./interaction/SignIn/SignIn";
import SignUp from "./interaction/SignUp/SignUp";

import FooterNonAuth from "../sharedComponents/FooterNonAuth/FooterNonAuth";
import FAQ from "../sharedComponents/FAQ/FAQ";
import HomeNonAuth from "./static/HomeNonAuth/HomeNonAuth";
import NavBarNonAuth from "./static/NavBarNonAuth/NavBarNonAuth";
import About from "../sharedComponents/About/About";
import Contact from "../sharedComponents/Contact/Contact";

const NonAuthApp = () => {
  return (
    <div className="NonAuthApp">
      <NavBarNonAuth />
      <main>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomeNonAuth} />
          <Route path={ROUTES.SIGNIN} component={SignIn} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route path={ROUTES.FAQ} component={FAQ} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.CONTACT} component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <FooterNonAuth />
    </div>
  );
};

export default NonAuthApp;
