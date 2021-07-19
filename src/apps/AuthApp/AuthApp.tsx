import { Route, Switch } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import FooterNonAuth from "../sharedComponents/FooterNonAuth/FooterNonAuth";
import HomeAuth from "./static/HomeAuth/HomeAuth";
import NavBarAuth from "./static/NavBarAuth/NavBarAuth";
import FAQ from "../sharedComponents/FAQ/FAQ";
import About from "../sharedComponents/About/About";
import Contact from "../sharedComponents/Contact/Contact";
import NotFound from "../sharedComponents/NotFound/NotFound";
import TransferGuide from "./static/TransferGuide/TranferGuide";
import PreQualifications from "./static/PreQualifications/PreQualifications";
import PropertyAdvisor from "./static/PropertyAdvisor/PropertyAdvisor";

const AuthApp = () => {
  return (
    <div className="AuthApp">
      <NavBarAuth />

      <main>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomeAuth} />
          <Route path={ROUTES.FAQ} component={FAQ} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.PROPERTY_ADVISOR} component={PropertyAdvisor} />
          <Route path={ROUTES.CONTACT} component={Contact} />
          <Route path={ROUTES.PRE_APPROVALS} component={PreQualifications} />
          <Route
            path={ROUTES.TRASNFER_PROCESS_GUIDE}
            component={TransferGuide}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
      <FooterNonAuth />
    </div>
  );
};

export default AuthApp;
