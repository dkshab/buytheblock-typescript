import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const About = () => {
  return (
    <div className="About">
      <p>
        Buy The Block aims to provide first time home buyers with the
        appropriate information needed to guide buyers through the process of
        becoming a homeowner. This is done by getting home buyers pre-qualified,
        choosing the right areas to purchase in and finally putting in offers
        that are market related.
      </p>
      <p>
        In addition to these services, we at Buy The Block aim to ensure that
        our home buyers are protected throught the process and are provided with
        the correct information needed to make sound property investments.
      </p>
      <h2>OUR SERVICES INCLUDE</h2>
      <div className="About__services">
        <div className="About__services__tile">
          <p>
            <span className="fas fa-paste"></span>
          </p>
          <h4>Pre-approvals</h4>
        </div>
        <div className="About__services__tile">
          <p>
            <span className="fas fa-home"></span>
          </p>
          <h4>Property Advice</h4>
        </div>
        <div className="About__services__tile">
          <p>
            <span className="fas fa-tags"></span>
          </p>
          <h4>Property Shopping</h4>
        </div>
        <div className="About__services__tile">
          <p>
            <span className="fas fa-home"></span>
          </p>
          <h4>Offer to purchase (OTP) Advice</h4>
        </div>
        <div className="About__services__tile">
          <p>
            <span className="far fa-credit-card"></span>
          </p>
          <h4>Credit Score Structuring</h4>
        </div>
        <div className="About__services__tile">
          <p>
            <span className="fas fa-cogs"></span>
          </p>
          <h4>Transfer Process Guide</h4>
        </div>
      </div>

      <div className="About__signup">
        <h2>SIGN UP TO GAIN ACCESS TO OUR SERVICES</h2>
        <h4>easy, quick, convenient</h4>
        <Link className="button" to={ROUTES.SIGNIN}>
          Sign Up Here
        </Link>
      </div>
    </div>
  );
};

export default About;
