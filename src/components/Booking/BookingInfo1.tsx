import React from "react";

import "./BookingInfo.css";

const BookingInfo1 = () => {
  return (
    <div className="bg-gray-200 flex h-[800px] text-xl">
      {/**left container */}
      <span className="flex flex-col w-2/3 ml-10 my-5 mr-5 h-[600px]">
        {/**left top section */}
        <div className="flex bg-white h-[400px]">
          {/**image section */}
          <div className=" flex flex-col w-1/2 ml-5 my-5 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1920px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"
              className="w-grow"
              alt="Car Img"
            />
            <div className="flex">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1920px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"
                className="w-1/3 mr-5 my-5"
                alt="Car Img"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1920px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"
                className="w-1/3 my-5"
                alt="Car Img"
              />
            </div>
          </div>

          {/**information section */}
          <div className="bg-white w-1/2 my-5 mr-5">
            <div className="pl-5">
              <div>
                <h3 className="bg-blue-100 text-3xl text-center text-blue-900 font-bold py-5">
                  Name
                </h3>
                <h3 className="bg-gray-300 text-xl text-center text-white font-bold mt-3 py-3">
                  Rating
                </h3>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <label className="">Car Type: Toyota Corolla</label>
                <label>Price: 5.000.000 VND/day </label>
                <label>Fuel: </label>
                <label>Capacity: </label>
              </div>
            </div>
          </div>
        </div>
        {/**bottom left container*/}
        <div className="bg-white my-5 h-[300px]">
          <h3 className="text-2xl text-blue-900 font-bold py-5 pl-5">
            Thông tin chi tiết
          </h3>
        </div>
      </span>

      {/**right container */}
      <span className="flex flex-col gap-5 w-1/3 mt-5 pr-5">
        {/**date section */}
        <div className="bg-white pb-5 pl-3">
          <h3 className="text-2xl text-blue-900 font-bold py-5">
            Thời gian thuê
          </h3>
          <hr className="pb-5" />
          <div className="flex gap-3 pb-3">
            <div className="flex flex-col border-gray-200 border-2 rounded">
              <label className="text-gray-600 text-sm">Rent Date</label>
              <input type="date" />
            </div>
            <div className="flex flex-col border-gray-200 border-2 rounded">
              <label className="text-gray-600 text-sm">Return Date</label>
              <input type="date" />
            </div>
          </div>
        </div>
        {/**bill section */}
        <div className="bg-white pl-3 text-xl">
          <h3 className="text-2xl text-blue-900 font-bold py-5">Bill</h3>
          <hr className="pb-5" />
          <div className="flex flex-col gap-3 pb-5">
            <label>Price: 5.000.000 VND/day</label>
            <label>Total: </label>
          </div>
        </div>
        {/**button section */}
        <div className=" bg-white flex flex-col gap-3 py-3">
          <button className="h-10 text-white bg-blue-600 text-xl mx-10 hover:bg-blue-600 rounded focus:outline-none">
            Order
          </button>
          <button className="h-10 text-white bg-gray-600 text-xl mx-10 hover:bg-blue-600 rounded focus:outline-none">
            Return
          </button>
        </div>
      </span>
    </div>
  );
};

export default BookingInfo1;
