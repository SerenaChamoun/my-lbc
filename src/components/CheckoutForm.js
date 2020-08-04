import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentProcess, setPaymentProcess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Récupérer les données renseignées par l'utilisateur
    const cardElement = elements.getElement(CardElement);

    // Envoyer les données bancaires au serveur de Stripe
    // Demander un token à l'API Stripe
    const stripeToken = await stripe.createToken(cardElement);

    console.log(stripeToken);
    console.log(stripeToken.token.id);

    //Faire une requête vers mon back en lui transmettant le token reçu par Stripe
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/payment",
      { token: stripeToken.token.id, amount: 1000, title: "monster" }
    );
    console.log(response.data);

    if (response.data.status === "succeeded") {
      setPaymentProcess(true);
    }
  };

  return (
    <div className="checkoutForm">
      {/* Envoyer les infos bancaires du user à stripe 
  Recuperer de stripe le token q'il me donne 
  Faire une requête axios vers le serveur en lui transmettant le token
  Recuperer le resulat du serveur et reagir en fonction de son return 
  */}
      {paymentProcess ? (
        <div style={{ fontSize: "20px", color: " #f56b2b" }}>
          Payment effectué !
        </div>
      ) : (
        <form
          style={{ width: "300px", display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <CardElement />
          <button
            style={{
              height: "50px",
              marginTop: "30px",
              backgroundColor: "#f56b2b",
              color: "white",
              borderStyle: "none",
              borderRadius: "7px",
              fontSize: "20px",
            }}
            type="submit"
          >
            Procéder au paiement
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
