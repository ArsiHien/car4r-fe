import React from "react";
import BookingList from "./BookingList";
import { BookingResponse } from "../../types/Booking";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface OrderDashboardProps {
  currentBookings: BookingResponse[];
  pastBookings: BookingResponse[];
  isLoading: boolean;
}

const OrderDashboard: React.FC<OrderDashboardProps> = ({
  currentBookings,
  pastBookings,
  isLoading,
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

      {isLoading ? (
        <div className="flex h-56 items-center justify-center">
          <Spin indicator={<LoadingOutlined spin />} size="large" />
        </div>
      ) : (
        <div>
          <div className="my-4">
            <h2 className="text-lg font-semibold mb-4">Current Bookings</h2>
            <BookingList bookings={currentBookings} isCurrent={true} />
          </div>

          <div className="my-4">
            <h2 className="text-lg font-semibold mb-4">Past Bookings</h2>
            <BookingList bookings={pastBookings} isCurrent={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDashboard;
