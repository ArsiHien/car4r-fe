import React from "react";

import "./BookingInfo.css";

const Payment = () => {
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
      <span className="mx-60">
        <div className="px-3 justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
            className="size-60"
            alt="QR Img"
          />
          <label className="align-middle relative left-10">
            Vui lòng quét mã
          </label>
        </div>
      </span>
    </div>
  );
};

export default Payment;
