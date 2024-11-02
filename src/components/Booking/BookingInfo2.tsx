import React from "react";

import "./BookingInfo.css";

const BookingInfo2 = () => {
  return (
    <div className="bg-gray-200 flex h-[700px]"> 
      <span className="bg-white w-1/3 ml-10 my-5 mr-5">
        <div className="flex-col"> 
        <div className="bg-blue-400 w-3/4 h-60 my-5 ml-10 ">Car img</div>
          <div className=" w-4/5 pl-4"> 
          <h3 className="text-xl text-green-800">Car Info</h3>          
            <div className="text-xl flex flex-col">
              <label>Name: </label>
              <label>Car Type: </label>
              <label>Price: </label>
              <label>Fuel: </label>
              <label>Capacity: </label>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white w-full pl-3 text-sm mb-3 pl-4"> 
          <h3  className="text-green-800 text-xl">Bill</h3>
            <div className="text-xl flex flex-col" >
              <label>Price: </label>
              <label>Number of days: </label>
              <label>Total: </label>
            </div>
          </div>
        </div>
        <div className="flex gap-10 ml-5 my-10">
        <button className="text-white bg-blue-500 text-xl px-10">Return</button> 
        <button className="text-white bg-blue-500 text-xl px-10">Order</button> 
        </div>
      </span>
      <span className="bg-white mr-10 w-3/4 my-5"> 
        <h1 className="text-3xl mx-3 my-3">Thông tin khách hàng</h1>
        <hr />
        <h2 className="text-xl mx-3 my-3">Nhập thông tin cá nhân để tiến hành đặt đơn</h2>
        <div className="px-3"> 
          <div className="flex my-3"> 
            <label className="w-1/4  my-3 mr-5 text-left text-xl"> 
              Name(*)
            </label>
            <input type="text" className="w-3/4 border border-gray-300 p-2 rounded" /> 
          </div>
          <div className="flex my-3">  
            <label className="w-1/4 my-3 mr-5 text-left text-xl">
              Phone(*)
            </label>
            <input type="text" className="w-3/4 border border-gray-300 p-2 rounded" />
          </div>
          <div className="flex my-3">
            <label className="w-1/4 my-3 mr-5 text-left text-xl">
              Address(*)
            </label>
            <input type="text" className="w-3/4 border border-gray-300 p-2 rounded" />
          </div>
        </div>
        <div className="mx-3 flex flex-1 my-10">
          <h3 className="w-1/4 my-3 mr-5 text-left text-xl">Phương thức thanh toán(*)</h3>
          <div className="w-60">
            <span className="flex flex-col flex-1 gap-3 my-5"> 
              <div className="flex items-center mb-5 border border-sm border-black h-10">
                <input id="default-checkbox" type="checkbox" value="" className="ml-5 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label className=" ml-5 text-sm text-xl text-gray-900 dark:text-gray-300 pl-10">Cash</label>
              </div>
              <div className="flex items-center mb-5 border border-sm border-black h-10">
                <input id="default-checkbox" type="checkbox" value="" className="ml-5 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label className=" ml-5 text-sm text-xl text-gray-900 dark:text-gray-300 pl-10">Momo</label>
              </div>
              <div className="flex items-center mb-5 border border-sm border-black h-10">
                <input id="default-checkbox" type="checkbox" value="" className="ml-5 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label className=" ml-5 text-sm text-xl text-gray-900 dark:text-gray-300 pl-10">ZaloPay</label>
              </div>
              <div className="flex items-center mb-5 border border-sm border-black h-10">
                <input id="default-checkbox" type="checkbox" value="" className="ml-5 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label className=" ml-5 text-sm text-xl text-gray-900 dark:text-gray-300 pl-10">VNPay</label>
              </div>
            </span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default BookingInfo2;
