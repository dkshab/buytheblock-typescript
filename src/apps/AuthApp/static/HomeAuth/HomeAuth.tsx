import * as React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../../../constants/routes";

const HomeAuth = () => {
  return (
    <div className="Home">
      <div className="Home__hero">
        <h1>Buy The Block</h1>
        <h3>Home Buyer Concierge Services</h3>
      </div>{" "}
      <div className="Home__container">
        <div className="Home__container__section1">
          <h2>BUY THE BLOCK IS A FIRST-TIME HOMEBUYER CONCIERGE SERVICE</h2>
          <div className="Home__container__section1__box">
            <div>
              <h4>The Challenge</h4>
              <p>
                Buying a new home can be a daunting experience, especially when
                you’re a first-time home buyer. Many first-time home buyers do
                not have a basic understanding of the buying process, and often
                make a purchase in an undesirable area or end up paying above
                market value. This happens because many first-time home buyers,
                do not have the right information to make informed property
                decisions.
              </p>
            </div>
            <div>
              <h4>The Solution</h4>
              <p>
                Buy The Block aims to provide first-time home buyers with the
                appropriate information needed to guide buyers through the
                process of becoming a homeowner. This is done through
                pre-qualifying the buyers, choosing the right areas to purchase
                in and finally putting in offers that are market related.
              </p>
              <p>
                In addition to these services, we at Buy The Block aim to ensure
                that our home buyers are protected throughout the process and
                are provided with adequate information needed to make sound
                property investments.
              </p>
            </div>
          </div>
        </div>
        <div className="Home__container__section2">
          <div className="Home__container__section2__started">
            <h2>LET’S GET STARTED</h2>
            <Link className="button" to={ROUTES.SIGNIN}>
              Contact Us
            </Link>
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
    </div>
  );
};

export default HomeAuth;
