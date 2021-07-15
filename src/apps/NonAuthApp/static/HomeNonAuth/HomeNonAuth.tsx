import * as React from "react";
import { firestore } from "../../../../utilities/firebase";
import { Link } from "react-router-dom";

import * as ROUTES from "../../../../constants/routes";

import { collectIdsAndDocs } from "../../../../utilities/helper-functions";

const HomeNonAuth = () => {
  React.useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await firestore.collection("posts").get();

      const allposts = snapshot.docs.map(collectIdsAndDocs);

      console.log("Were are rusty!", allposts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="Home">
      <div className="Home__hero">
        <h1>Buy The Block</h1>
        <h3>Home Buyer Concierge Services</h3>
        <p>
          Signed up? <Link to={ROUTES.SIGNIN}>Log in Here</Link>
        </p>
      </div>
      <div className="Home__container">
        <div className="Home__container__section1">
          <h2>BUY THE BLOCK IS A FIRST-TIME HOMEBUYER CONCIERGE SERVICE</h2>
          <div className="Home__container__section1__box">
            <div>
              <h4>The Challenge</h4>
              <p>
                Many first time home buyers don’t know the first thing to do
                when it comes to buying a property.
              </p>
              <p>
                The few that have a basic understanding often make their
                purchase in the wrong areas and more often than not end up
                overpaying for a property because they don’t have the right
                information to make an informed decision.
              </p>
            </div>
            <div>
              <h4>The Solution</h4>
              <p>
                Buy The Block aims to provide first time home buyers with the
                appropriate information needed to guide buyers through the
                process of becoming a homeowner. This is done by getting home
                buyers pre-qualified, choosing the right areas to purchase in
                and finally putting in offers that are market related.
              </p>
              <p>
                In addition to these services, we at Buy The Block aim to ensure
                that our home buyers are protected throughout the process and
                are provided with the correct information needed to make sound
                property investments.
              </p>
            </div>
          </div>
        </div>
        <div className="Home__container__section2">
          <div className="Home__container__section2__signup">
            <h2>SIGN UP TO GAIN ACCESS TO OUR SERVICES</h2>
            <h4>easy, quick, convenient</h4>
            <Link className="button" to={ROUTES.SIGNIN}>
              Sign Up Here
            </Link>
          </div>
          <div className="Home__container__section2__started">
            <h2>LET’S GET STARTED</h2>
            <Link className="button" to={ROUTES.SIGNIN}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="Home__socials">
        <h2>FOLLOW US ON SOCIAL MEDIA</h2>
        <div>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fab fa-twitter"></span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fab fa-instagram"></span>
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fab fa-facebook-f"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeNonAuth;
