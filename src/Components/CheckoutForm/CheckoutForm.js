import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Checkoutform.css";

function CheckoutForm() {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentFinished, setPaymentFinished] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentFinished(null);
    } else {
      setPaymentFinished(paymentMethod);
      setPaymentError(null);
    }
  };

  return (
    <div className="checkoutform">
      <form onSubmit={handleSubmit}>
        <span className="checkout__cart">
          <CardElement />
        </span>
        <button className="pay" type="submit" disabled={!stripe}>
          Pay
        </button>
        {paymentError && <p styel={{ color: "red" }}>{paymentError}</p>}
        {paymentFinished && <p style={{ color: "green" }}>Payment success</p>}
      </form>
    </div>
  );
}

export default CheckoutForm;
