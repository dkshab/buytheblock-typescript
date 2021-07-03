import HomeNonAuth from "./static/HomeNonAuth/HomeNonAuth";
import NavBarNonAuth from "./static/NavBarNonAuth/NavBarNonAuth";

const NonAuthApp = () => {
    return (
      <div className="NonAuthApp">
       <NavBarNonAuth/>
       <HomeNonAuth />
      </div>
    );
  };
  
  export default NonAuthApp;