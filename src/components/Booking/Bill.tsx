import React from "react";

import "./BookingInfo.css";

const Bill = () => {
  return (
    <div className="ml-3">
      <h1 className="text-2xl text-center">CAR4R THANK YOU!!!</h1>
      <div className="flex gap-3">
        <span className="bg-neutral-300 w-2/5 pl-3 pt-3">
          <label>Order Info</label>
          <div className="bg-white w-4/5 pl-3 text-sm mb-3">
            <div>
              <label>Order ID: </label>
              123456
            </div>
            <div>
              <label>Order Date: </label>
              2021-09-01
            </div>
            <div>
              <label>Order Status: </label>
              Completed
            </div>
            <div>
              <label>Order Total: </label>
              25.000.000 VND
            </div>
            <div>
              <label>Rent Date: </label>
              From 2021-09-01 to 2021-09-06
            </div>
          </div>
        </span>
        <span className="bg-neutral-300 w-2/5 pl-3 pt-3">
          <label>Payment Info </label>
          <div className="bg-white w-4/5 pl-3 text-sm mb-3">
            <div>
              <label>Payment Method: </label>
              Cash
            </div>
            <div>
              <label>Payment Date: </label>
              2021-09-06
            </div>
            <div>
              <label>Payment Status: </label>
              Paid
            </div>
            <div>
              <label>Payment Total: </label>
              25.000.000 VND
            </div>
          </div>
        </span>
      </div>
      <div className="mt-5">
        <button className="text-white bg-blue-500 w-40 h-14 relative left-1/4">
          Home
        </button>
        <button className="text-white bg-blue-500 w-40 h-14 relative left-1/2">
          Import/Save
        </button>
      </div>
    </div>
  );
};

export default Bill;
