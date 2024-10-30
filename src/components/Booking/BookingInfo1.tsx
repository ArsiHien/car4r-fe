import React from "react";

import "./BookingInfo.css";

const BookingInfo1 = () => {
  return (
    <div className="flex ml-3">
      <span className="bg-neutral-300 w-3/5 pl-3 pt-3">
        <h3>Rent Date</h3>
        <input type="date" />
        <h3>Return Date</h3>
        <input type="date" />
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
        <div className="flex gap-6">
          <button className="text-white bg-blue-500 w-16">Next</button>
          <button className="text-white bg-blue-500 w-16">Return</button>
        </div>
      </span>
      <span className="mx-3">
        <div className="flex gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1920px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"
            className="size-1/4"
            alt="Car Img"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1920px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"
            className="size-1/4"
            alt="Car Img"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1920px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"
            className="size-1/4"
            alt="Car Img"
          />
        </div>
        <div className="bg-neutral-300 mt-3 pl-3 h-40 w-3/4">
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
      </span>
    </div>
  );
};

export default BookingInfo1;
