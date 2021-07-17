import * as React from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

import { firestore } from "../../../utilities/firebase";

import * as ROUTES from "../../../constants/routes";

type ContactType = {
  [key: string]: string;
};

const initialState = {
  firstName: "",
  lastName: "",
  propertyType: "",
  contactNumber: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [state, setState] = React.useState<ContactType>(initialState);
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

    const { firstName, lastName, propertyType, contactNumber, email, message } =
      state;

    const contactMessage = {
      firstName,
      lastName,
      propertyType,
      contactNumber,
      email,
      message,
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
    <div className="Contact">
      <div className="Contact__hero">
        <h2>CONTACT US</h2>
      </div>
      <div className="Contact__content">
        <h3>
          Leave your details below & we’ll reach out to you within 48 hours
        </h3>

        <form onSubmit={handleSubmit} action="">
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
              aria-label="firstName"
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
  );
};

export default Contact;
