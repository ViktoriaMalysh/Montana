import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51KUSyrKfW2ml5zvjf5mi9DdLVGsSLSTpn5yfqy86wHKyTI4UsXFwCDaH5nT7cA2V4aGMGDciJiRH65ad3ebCFEpX00J6DbKtPv";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}