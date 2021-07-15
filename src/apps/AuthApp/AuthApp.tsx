import { Route, Switch } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import FooterNonAuth from "../sharedComponents/FooterNonAuth/FooterNonAuth";
import HomeAuth from "./HomeAuth/HomeAuth";
import NavBarAuth from "./NavBarAuth/NavBarAuth";
import FAQ from "../sharedComponents/FAQ/FAQ";
import About from "../sharedComponents/About/About";
import Contact from "../sharedComponents/Contact/Contact";

const AuthApp = () => {
  return (
    <div className="AuthApp">
      <NavBarAuth />

      <main>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomeAuth} />
          <Route path={ROUTES.FAQ} component={FAQ} />
          <Route path={ROUTES.FAQ} component={About} />
          <Route path={ROUTES.CONTACT} component={Contact} />
        </Switch>
      </main>
      <FooterNonAuth />
    </div>
  );
};

export default AuthApp;
