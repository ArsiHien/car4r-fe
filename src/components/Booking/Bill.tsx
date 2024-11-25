import React from "react";

import "./BookingInfo.css";

const Bill = () => {
  return (
    <div className="bg-gray-200 mx-5 h-[600px] py-5 text-xl">
      {/**content section */}
      <div className="bg-white mx-5 py-5">
        {/**title */}
        <h1 className="text-blue-900 font-bold py-5 text-3xl text-center">
          CAR4R THANK YOU!!!
        </h1>
        <hr />
        {/**Left container */}
        <div className="flex gap-3 py-5 ">
          {/**Order Information */}
          <span className="w-1/2 flex flex-col gap-3 mx-5 px-5 border-blue-200 border-2 pb-3">
            <label className="text-blue-600 font-bold text-2xl pt-3">
              Order Info
            </label>
            <hr />
            <div className="flex justify-between">
              <label>Order ID: </label>
              <label className="text-right">21310</label>
            </div>
            <div className="flex justify-between">
              <label>Order Date: </label>
              <label className="text-right">2021-09-01</label>
            </div>
            <div className="flex justify-between">
              <label>Order Status: </label>
              <label className="text-right">Completed</label>
            </div>
            <div className="flex justify-between">
              <label>Order Total: </label>
              <label className="text-right">25.000.000 VND</label>
            </div>
            <div className="flex justify-between">
              <label>Rent Date: </label>
              <label htmlFor="" className="text-right">
                5 days
              </label>
            </div>
          </span>

          {/**Bill section */}
          <span className="w-1/2 flex flex-col px-5 mr-5 border-blue-200 border-2 gap-3">
            <label className="text-blue-600 font-bold text-2xl pt-3">
              Payment Info{" "}
            </label>
            <hr />
            <div className="flex justify-between">
              <label>Payment Method: </label>
              <label className="text-right">Cash</label>
            </div>
            <div className="flex justify-between">
              <label>Payment Date: </label>
              <label className="text-right">2021-09-06 </label>
            </div>
            <div className="flex justify-between">
              <label>Payment Status: </label>
              <label className="text-right">Paid</label>
            </div>
            <div className="flex justify-between">
              <label>Payment Total: </label>
              <label className="text-right">25.000.000 VND</label>
            </div>
          </span>
        </div>
        {/**Button section */}
        <div className="flex justify-center gap-10 pt-10">
          <button className="text-white bg-blue-600 w-40 h-12 hover:bg-blue-900 rounded focus:outline-none ">
            Home
          </button>
          <button className="text-white bg-blue-600 w-40 h-12 hover:bg-blue-900 rounded focus:outline-none">
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bill;
