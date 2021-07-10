import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import Application from "./apps/Application";
import { CurrentUserProvider } from "./context/currentUser-context";

ReactDOM.render(
  <Router>
    <CurrentUserProvider>
      <Application />
    </CurrentUserProvider>
  </Router>,
  document.getElementById("root")
);
