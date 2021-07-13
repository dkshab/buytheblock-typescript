import { Route, Switch } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import FooterNonAuth from "../sharedComponents/FooterNonAuth/FooterNonAuth";
import HomeAuth from "./HomeAuth/HomeAuth";
import NavBarAuth from "./NavBarAuth/NavBarAuth";

const AuthApp = () => {
  return (
    <div className="AuthApp">
      <NavBarAuth />

      <main>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomeAuth} />
        </Switch>
      </main>
      <FooterNonAuth />
    </div>
  );
};

export default AuthApp;
