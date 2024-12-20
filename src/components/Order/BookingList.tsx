import React, { useState } from "react";
import BookingRow from "./BookingRow.tsx";
import { BookingResponse } from "../../types/Booking.ts";

interface BookingListProps {
  bookings: BookingResponse[];
  isCurrent: boolean;
}

const BookingList: React.FC<BookingListProps> = ({ bookings, isCurrent }) => {
  return (
    <>
      {bookings.map((booking, index) => (
        <BookingRow
          key={booking.id}
          booking={booking}
          index={index}
          isCurrent={isCurrent}
        />
      ))}
    </>
  );
};

export default BookingList;
