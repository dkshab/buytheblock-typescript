import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const About = () => {
  return (
    <div className="About">
      <div className="About__hero">
        <h2>ABOUT US</h2>
      </div>
      <div className="About__content">
        <div className="About__content__heading">
          <p>
            Buy The Block aims to provide first time home buyers with the
            appropriate information needed to guide buyers through the process
            of becoming a homeowner. This is done by getting home buyers
            pre-qualified, choosing the right areas to purchase in and finally
            putting in offers that are market related.
          </p>
          <p>
            In addition to these services, we at Buy The Block aim to ensure
            that our home buyers are protected throught the process and are
            provided with the correct information needed to make sound property
            investments.
          </p>
        </div>
        <h2>OUR SERVICES INCLUDE</h2>
        <div className="About__content__services">
          <div className="About__content__services__tile">
            <p>
              <span className="fas fa-paste"></span>
            </p>
            <h4>Pre-approvals</h4>
          </div>
          <div className="About__content__services__tile">
            <p>
              <span className="fas fa-home"></span>
            </p>
            <h4>Property Advice</h4>
          </div>
          <div className="About__content__services__tile">
            <p>
              <span className="fas fa-tags"></span>
            </p>
            <h4>Property Shopping</h4>
          </div>
          <div className="About__content__services__tile">
            <p>
              <span className="fas fa-home"></span>
            </p>
            <h4>Offer to purchase (OTP) Advice</h4>
          </div>
          <div className="About__content__services__tile">
            <p>
              <span className="far fa-credit-card"></span>
            </p>
            <h4>Credit Score Structuring</h4>
          </div>
          <div className="About__content__services__tile">
            <p>
              <span className="fas fa-cogs"></span>
            </p>
            <h4>Transfer Process Guide</h4>
          </div>
        </div>

        <div className="About__content__signup">
          <h2>SIGN UP TO GAIN ACCESS TO OUR SERVICES</h2>
          <h4>easy, quick, convenient</h4>
          <Link className="button" to={ROUTES.SIGNIN}>
            Sign Up Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
