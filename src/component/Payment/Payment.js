import React, { useState, useEffect } from "react";
import pic from '../../assets/.PNG/logo.png'
import './Payment.css'

const ProductDisplay = () => {
  const [sessionId, setSessionId] = useState(null);

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      const data = await response.json();

      console.log("Session ID:", data.sessionId);
      setSessionId(data.sessionId);
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };
  useEffect(() => {
    if (sessionId) {
      const stripe = window.Stripe(
        process.env.REACT_APP_STRIPE_SECRET_KEY
      );
      stripe.redirectToCheckout({ sessionId });
    }
  }, [sessionId]);
  return (
    <div className="product-container">
    <section className="product-section">
      <div className="product">
        <img
          src={pic}
          alt="The cover of Stubborn Attachments"
          className="product-image"
        />
        <div className="description">
          <h3 className="product-title">Promote Your AI Tools</h3>
          <h5 className="product-price">$54.99</h5>
        </div>
      </div>
      <button onClick={handleCheckout} type="button" className="btn checkout-btn">
        Checkout
      </button>
    </section>
  </div>
  
  );
};

export default ProductDisplay;
