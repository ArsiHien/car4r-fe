import React from "react";

import "./BookingInfo.css";

const BookingInfo2 = () => {
  return (
    <div className="flex ml-3">
      <span className="bg-neutral-300 w-1/4 pl-3 pt-3">
        <div className="bg-neutral-300 h-40">
          <h3>Car Info</h3>
          <div className="bg-white w-4/5 pl-4 text-sm mb-3">
            <div>
              <label>Name: </label>
              BMX
            </div>
            <div>
              <label>Car Type: </label>
              Toyota Corolla
            </div>
            <div>
              <label>Price: </label>
              5.000.000 VND/day
            </div>
            <div>
              <label>Fuel: </label>
            </div>
            <div>
              <label>Capacity: </label>
            </div>
          </div>
        </div>
        <div>
          <h3>Bill</h3>
          <div className="bg-white w-4/5 pl-3 text-sm mb-3">
            <div>
              <label>Price: </label>
              5.000.000 VND/day
            </div>
            <div>
              <label>Number of days: </label>5 days
            </div>
            <div>
              <label>Total: </label>
              25.000.000 VND
            </div>
          </div>
          <button className="text-white bg-blue-500 w-16">Return</button>
        </div>
      </span>
      <span className="mx-3 w-3/4">
        <div className="px-3">
          <div className="flex my-3">
            <label className="w-16 bg-neutral-300 my-3 mr-3 text-center">
              Name
            </label>
            <input type="text" className="w-3/4" />
          </div>
          <div className="flex my-3">
            <label className="w-16 bg-neutral-300 my-3 mr-3 text-center">
              Phone
            </label>
            <input type="text" className="w-3/4" />
          </div>
          <div className="flex my-3">
            <label className="w-16 bg-neutral-300 my-3 mr-3 text-center">
              Address
            </label>
            <input type="text" className="w-3/4" />
          </div>
        </div>
        <div className="mx-3">
          <span>
            <button className="bg-blue-500 text-white w-16">Cash</button>
          </span>
          <h3>Or Online Payment</h3>
          <span className="flex gap-3">
            <button className="bg-blue-500 text-white w-16">Momo</button>
            <button className="bg-blue-500 text-white w-16">ZaloPay</button>
            <button className="bg-blue-500 text-white w-16">VNPay</button>
          </span>
        </div>
      </span>
    </div>
  );
};

export default BookingInfo2;
