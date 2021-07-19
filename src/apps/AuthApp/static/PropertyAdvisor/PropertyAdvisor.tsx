import * as React from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

import { firestore } from "../../../../utilities/firebase";

import * as ROUTES from "../../../../constants/routes";

type PropertyType = {
  [key: string]: string;
};
const initialState = {
  firstName: "",
  lastName: "",
  propertyType: "",
  contactNumber: "",
  email: "",
  message: "",
  budget: "",
};

const PropertyAdvisor = () => {
  const [state, setState] = React.useState<PropertyType>(initialState);
  const [error, setError] = React.useState<firebase.auth.Error | null>(null);
  const history = useHistory();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      propertyType,
      contactNumber,
      email,
      message,
      budget,
    } = state;

    const contactMessage = {
      firstName,
      lastName,
      propertyType,
      contactNumber,
      email,
      message,
      budget,
      createdAt: new Date(),
    };

    try {
      await firestore.collection("contactFormMessages").add(contactMessage);
      clear();
      history.push(ROUTES.HOME);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <div className="PropertyAdvisor">
      <div className="PropertyAdvisor__hero">
        <h2>PROPERTY ADVISOR</h2>
      </div>
      <div className="PropertyAdvisor__content">
        <h2>THIS SERVICE INCLUDES:</h2>
        <div className="PropertyAdvisor__content__services">
          <div className="PropertyAdvisor__content__services__tile">
            <p>
              <span className="fas fa-home"></span>
            </p>
            <h4>Pre-approvals</h4>
          </div>
          <div className="PropertyAdvisor__content__services__tile">
            <p>
              <span className="fas fa-tags"></span>
            </p>
            <h4>Pre-approvals</h4>
          </div>
          <div className="PropertyAdvisor__content__services__tile">
            <p>
              <span className="fas fa-file-alt"></span>
            </p>
            <h4>Pre-approvals</h4>
          </div>
          <div className="PropertyAdvisor__content__services__tile">
            <p>
              <span className="fas fa-credit-card"></span>
            </p>
            <h4>Pre-approvals</h4>
          </div>
        </div>

        <div className="PropertyAdvisor__content__contact">
          <h4>
            LEAVE YOUR DETAILS BELOW AND A PROPERTY ADVISOR WILL CONTACT YOU
            WITHIN 48 HOURS
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="left">
              <input
                type="text"
                name="firstName"
                className=""
                aria-label="firstName"
                placeholder="First Name"
                value={state.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                className=""
                aria-label="email"
                placeholder="Email Address"
                value={state.email}
                onChange={handleChange}
              />

              <select
                name="propertyType"
                id=""
                value={state.propertyType}
                onChange={handleChange}
              >
                <option value="Property Type?">Property Type?</option>
                <option value="House">House</option>
                <option value="Apartment/Flat">Apartment/Flat</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>
            <div className="right">
              <input
                type="text"
                name="lastName"
                className=""
                aria-label="lastName"
                placeholder="Last Name"
                value={state.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="contactNumber"
                className=""
                aria-label="contactNumber"
                placeholder="Contact Number"
                value={state.contactNumber}
                onChange={handleChange}
              />
              <input
                type="text"
                name="budget"
                className=""
                aria-label="budget"
                placeholder="Budget"
                value={state.budget}
                onChange={handleChange}
              />
            </div>
            <div className="bottom">
              <textarea
                name="message"
                id=""
                placeholder="Message"
                value={state.message}
                onChange={handleChange}
              ></textarea>
              <div className="buttons">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
          {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
          {error && <p className="help">{error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default PropertyAdvisor;
