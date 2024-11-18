import React from "react";

import "./BookingInfo.css";

const Payment = () => {
  return (
    <div className="flex mx-5 h-[600px] bg-gray-200 text-xl ">
      {/**left container */}
      <span className="flex flex-col w-1/3 ml-5 my-5 bg-white">
        <div className="">
          <h3 className="text-3xl text-blue-900 font-bold py-5 text-center ">Thông tin đơn đặt xe</h3>
          <hr />
          {/**information contatiner */}
          <div className="flex flex-col gap-3 mx-5 mb-3">
          <h3 className="text-2xl text-blue-600 font-bold">Thông tin xe đặt</h3>
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
          <button className="px-20 h-10 text-white bg-gray-600 text-xl hover:bg-gray-400 rounded focus:outline-none">Return</button> 
          </div>
      </span>
      {/**right container */}
      <span className="w-2/3 flex flex-col justify-center items-center bg-white mx-5 my-5">
        <div className="px-5 justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
            className="h-96 w-96"
            alt="QR Img"
          />
          <div className="w-96 text-center">
            Vui lòng quét mã
          </div>
        </div>
      </span>
    </div>
  );
};

export default Payment;
