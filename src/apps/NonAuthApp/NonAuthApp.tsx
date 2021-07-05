import FooterNonAuth from "./static/FooterNonAuth/FooterNonAuth";
import HomeNonAuth from "./static/HomeNonAuth/HomeNonAuth";
import NavBarNonAuth from "./static/NavBarNonAuth/NavBarNonAuth";

const NonAuthApp = () => {
  return (
    <div className="NonAuthApp">
      <NavBarNonAuth />
      <HomeNonAuth />
      <FooterNonAuth />
    </div>
  );
};

export default NonAuthApp;
