import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const FAQ = () => {
  return (
    <div className="FAQ">
      <div className="FAQ_step1">
        <h2>Step 1: How to assess Your Affordability</h2>
        <p>
          Before you start looking for a property, you need to have an idea of
          what you’re able to afford.
        </p>
        <ul>
          <li>
            <span>What mortgage finance amount do you qualify for?</span>A bond
            originator will be able to help you with this and will also be able
            to shop around among all the banks for the most favourable interest
            rates and other lending conditions.
          </li>
          <li>
            <span>What monthly repayments can you afford?</span>You can use the{" "}
            <Link to={ROUTES.PRE_APPROVALS}>Ooba affordability calculator</Link>{" "}
            to work out what size mortgage you can qualify for.
          </li>
          <li>
            Do you have cash for a deposit, as well as legal fees, bond fees and
            transfer costs?
          </li>
        </ul>
      </div>
      <div className="FAQ_step2">
        <h2>
          Step 2: Now that you know what you’re able to afford, you should
          consider the following House Hunting Tips:
        </h2>
        <p>Some things to take note of when you are house hunting include:</p>
        <ul>
          <li>
            <span>Your budget</span> – be realistic about what property you can
            afford.
          </li>
          <li>
            <span>Your needs</span> – property is a long-term investment. So,
            consider your present- and future needs.
          </li>
          <li>
            <span>Your lifestyle</span> – find a neighbourhood that offers your
            desired lifestyle. Is it run down or experiencing a lot of
            development? Is the property subject to a lot of noise?
          </li>
          <li>
            <span>Security</span> – how safe is the property? Is crime in the
            area under control?
          </li>
          <li>
            <span>Proximity</span> – to healthcare, schools, work and shops.
          </li>
          <li>
            <span>Your space</span> – the minimum number of bedrooms, bathrooms,
            parking bays and garden space that you need. What will it cost to
            secure your pets? Are your communication needs met? Consider all
            other initial costs of operating your household.
          </li>
          <li>
            <span>Property type</span> – do you want to live in a freestanding
            house, a flat or in a complex? Is the complex well run and
            maintained? How much are the Levies? What are my restrictions?
          </li>
          <li>
            <span>Maintenance</span> – do you have the time to maintain the
            garden and pool?
          </li>
          <li>
            <span>Cost of renovating/redecorating</span> – how much work does
            the property need? Can this be achieved without breaking the bank?
          </li>
        </ul>
        <p>
          As part of our services, we’re able to assist you in finding your
          dream home. Simply complete the{" "}
          <Link to={ROUTES.PRE_APPROVALS}> property advisor form</Link> and one
          of our consultants will contact you.
        </p>
      </div>
      <div className="FAQ_step3">
        <h2>Step 3: Sealing the Deal on a Property</h2>
        <p>A quick checklist when completing an offer to purchase:</p>
        <ul>
          <li>
            Check that the description of the property is correct (as described
            in the title deed).
          </li>
          <li>Are all the buyers’ and sellers’ details documented clearly?</li>
          <li>Check that the purchase price is written correctly.</li>
          <li>
            Are you happy with the occupation date and occupational rent amount?
          </li>
          <li>
            Make sure you are aware of any special conditions and the time
            period in which these conditions need to be fulfilled i.e. that the
            agreement is subject to a grant of the buyer’s bond, or the sale of
            his other property.
          </li>
          <li>
            There may be movable items that can stay with the property. Are they
            all listed and are the movable items, which are not included in the
            sale, listed?
          </li>
          <li>
            Check that the estate agent’s commission is correct (as agreed
            upon).
          </li>
          <li>
            Check that the estate agent’s commission is correct (as agreed
            upon).
          </li>
        </ul>
      </div>
      <div className="FAQ_step4">
        <h2>Step 4: Home Loan Know-How</h2>
        <p>The home loan application process:</p>
        <ul>
          <li>
            <span>Step 1 – Submit your application:</span> Apply for a bond
            through a bank or bond originator.
          </li>
          <li>
            <span>Step 2 – Approval in principle:</span> Once your application
            has been assessed, you will receive an approval in principle,
            subject to valuation.
          </li>
          <li>
            <span>Step 3 – Property valuation:</span> The bank evaluates the
            property to determine its true worth.
          </li>
          <li>
            <span>Step 4 – Loan is approved:</span> Once approved you receive a
            quotation showing approved home loan amount, interest rate and key
            terms and conditions.
          </li>
          <li>
            <span>Step 5 – Bond registration:</span> Once the quote has been
            accepted and signed by you, the bank will formally grant the loan
            and instruct the bond attorney to register the bond.
          </li>
        </ul>
      </div>
      <div className="FAQ_step5">
        <h2>Step 5: Registration and Transfer Process</h2>
        <p>
          Taking ownership of your new home. Understanding the legal aspects of
          registering your bond and transferring the property to your name. The
          three attorneys involved in transferring your new property into your
          name are:
        </p>
        <li>
          <span>Transfer attorney:</span> Handles the transfer of the property.
          Selected by the seller.
        </li>
        <li>
          <span>Cancellation attorney:</span> Cancels the seller’s existing
          bond. Selected by seller’s bank.
        </li>
        <li>
          <span>Bond attorney:</span> Registers the new bond in the name of the
          buyer. Selected by buyer’s bank
        </li>
      </div>
      <p className="FAQ__source">
        <span>Source: </span>Private Property
      </p>
    </div>
  );
};

export default FAQ;
