import { useState } from "react";

import "./BookingInfo.css";

const Payment = () => {
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null); // Added state for payment URL
  const [amount, setAmount] = useState<number>(25000000);

  const handlePayment = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/payment/vn-pay?amount=${amount}&bankCode=NCB`);
      const data = await response.json();
      if (data.code === 200) {
        setPaymentUrl(data.data.paymentUrl); // Set payment URL from response
      } else {
        console.error("Payment error:", data.message);
      }
    } catch (error) {
      console.error("Error fetching payment URL:", error);
    }
  };

  return (
    <div className="flex mx-5 h-[600px] bg-gray-200 text-xl ">
      {/**left container */}
      <span className="flex flex-col w-1/3 ml-5 my-5 bg-white">
        <div className="">
          <h3 className="text-3xl text-blue-900 font-bold py-5 text-center ">
            Thông tin đơn đặt xe
          </h3>
          <hr />
          {/**information contatiner */}
          <div className="flex flex-col gap-3 mx-5 mb-3">
            <h3 className="text-2xl text-blue-600 font-bold">
              Thông tin xe đặt
            </h3>
            <div className="flex justify-between">
              <label>Name: </label>
              <label className="text-right">BMX</label>
            </div>
            <div className="flex justify-between">
              <label>Car Type: </label>
              <label className="text-right">Toyota Corolla</label>
            </div>
            <div className="flex justify-between">
              <label>Price: </label>
              <label className="text-right">5.000.000 VND/day</label>
            </div>
            <div className="flex justify-between">
              <label>Fuel: </label>
              <label></label>
            </div>
            <div className="flex justify-between">
              <label>Capacity: </label>
              <label></label>
            </div>
          </div>
        </div>
        <hr />
        {/**bill container */}
        <div className="flex flex-col gap-3 bg-white mx-5">
          <h3 className="text-2xl text-blue-600 font-bold">Bill</h3>
          <div className="flex justify-between">
            <label>Price: </label>
            <label className="text-right">5.000.000 VND/day</label>
          </div>
          <div className="flex justify-between">
            <label>Number of days: </label>
            <label className="text-right">5 days</label>
          </div>
          <hr />
          <div className="flex justify-between">
            <label>Total: </label>
            <label className="text-right">25.000.000 VND</label>
          </div>
        </div>
        {/**button section */}
        <div className="flex justify-center items-center py-5">
          <button className="px-20 h-10 text-white bg-gray-600 text-xl hover:bg-gray-400 rounded focus:outline-none">
            Return
          </button>
        </div>
      </span>
      {/**right container */}
      <span className="w-2/3 flex flex-col justify-center items-center bg-white mx-5 my-5">
        <div className="flex justify-center items-center py-5">
          <button
            className="px-20 h-10 text-white bg-gray-600 text-xl hover:bg-gray-400 rounded focus:outline-none"
            onClick={handlePayment} // Added onClick handler for payment button
          >
            Pay Now
          </button>
        </div>
        {paymentUrl && ( // Conditionally render the payment link
          <div className="flex justify-center items-center py-5">
            <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              Click here to complete your payment
            </a>
          </div>
        )}
      </span>
    </div>
  );
};

export default Payment;
