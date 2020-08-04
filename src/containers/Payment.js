import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const location = useLocation();
  const { picture } = location.state;
  const { title } = location.state;
  const { price } = location.state;
  console.log(picture);

  return (
    <div className="payment">
      <div className="paymentContainer">
        <h2>Acheter en ligne</h2>
        <div>
          <img
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
            src={picture}
            alt={title}
          />
        </div>
        <h2>{title}</h2>
        <div style={{ color: " #f56b2b" }}>{price} €</div>
        <br /> <br /> <br /> <br />
        <h2>Vos coordonnées bancaires</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
