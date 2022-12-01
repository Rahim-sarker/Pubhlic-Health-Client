import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Login/Loading";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LivKuJaaD5yHCLCS4uNkaeFVM1H0pWA6TMgHleGXYWqlLxF6vLuhBmNPlZcfhOyQI6Xgb5VRSDasbucwiGz9LSE006QAE1uQH"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
      <div class="card-body">
        <p className="text-secondary font-bold">
          Hello, {appointment.patientName}
        </p>
        <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
        <p>
          Your appointment:{" "}
          <span className="text-orange-700"> {appointment.date}</span> at{" "}
          {appointment.slot}
        </p>
        <p>Please pay: {appointment.price} Tk</p>
      </div>

      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
