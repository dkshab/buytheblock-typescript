const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact__hero">
        <h2>CONTACT US</h2>
      </div>
      <div className="Contact__content">
        <h3>
          Leave your details below & we’ll reach out to you within 48 hours
        </h3>

        <form action="">
          <div className="left">
            <input
              type="text"
              name="firstName"
              className=""
              aria-label="firstName"
              placeholder="First Name"
            />
            <input
              type="text"
              name="email"
              className=""
              aria-label="firstName"
              placeholder="Email Address"
            />

            <select name="" id="">
              <option value="Property Type?"></option>
            </select>
          </div>
          <div className="right">
            <input
              type="text"
              name="lastName"
              className=""
              aria-label="lastName"
              placeholder="Last Name"
            />
            <input
              type="text"
              name="contactNumber"
              className=""
              aria-label="contactNumber"
              placeholder="Contact Number"
            />
            <textarea name="" id="" placeholder="Message"></textarea>
            <div className="buttons">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
