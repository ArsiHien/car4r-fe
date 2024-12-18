import React, { useState } from "react";
import { Button, Tag } from "antd";
import { BookingResponse } from "../../store/Customer/bookingSlice";
import BookingList from "./BookingList";

interface OrderDashboardProps {
  currentBookings: BookingResponse[];
  pastBookings: BookingResponse[];
}

const OrderDashboard: React.FC<OrderDashboardProps> = ({
  currentBookings,
  pastBookings,
}) => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Order Dashboard</h1>

      {/* Header */}
      <div className="flex flex-wrap font-medium text-gray-700 bg-white p-4 rounded-md shadow-md">
        <div className="basis-[5%]">#</div>
        <div className="basis-1/5">Car Details</div>
        <div className="basis-[12%]">Booking Date</div>
        <div className="basis-[12%]">Date</div>
        <div className="basis-[12%]">Places</div>
        <div className="basis-[12%]">Price</div>
        <div className="basis-[12%]">Status</div>
        <div className="basis-[15%]"></div>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-semibold mb-4">Current Bookings</h2>
        <BookingList bookings={currentBookings} isCurrent={true} />
      </div>

      {/* Past Bookings */}
      <div className="my-4">
        <h2 className="text-lg font-semibold mb-4">Past Bookings</h2>
        <BookingList bookings={pastBookings} isCurrent={false} />
      </div>
    </div>
  );
};

export default OrderDashboard;
