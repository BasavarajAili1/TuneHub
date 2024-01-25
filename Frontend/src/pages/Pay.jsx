import React from "react";
import Header from "../components/Header";
// import { useRazorpay } from "razorpay"; // Replace "razorpay-library" with the actual library you are using

const Pay = () => {
  const amount = "5000"
  const createOrder = async () => {
    return await fetch("http://localhost:8081/payment/" + amount * 100, {
      mode: "no-cors",
      method: "GET",
    });
  };


  return (
    <>
      <Header />
      <div>
        <br></br>
        <h2 className="text-center display-6">WHY PREMIUM..?</h2>
        <br></br>

        <form id="payment-form">
          <button
            type="submit"
            className="btn btn-warning"
            onClick={createOrder}
          >
            BUY
          </button>
        </form>
      </div>
    </>
  );
};

export default Pay;
