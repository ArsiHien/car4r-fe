import { ReviewResponse } from "./Review";

export interface BookingResponse {
  id: string;
  customerName: string;
  carCategoryName: string;
  carLicensePlate: string;
  bookingDate: string;
  startDate: string;
  returnDate: string;
  loanPlace: string;
  returnPlace: string;
  totalPrice: number;
  status: string;
  review: ReviewResponse | null;
}

export interface BookingPartitionResponse {
  currentBookings: BookingResponse[];
  pastBookings: BookingResponse[];
}

interface Booking {
    id: string;
    customerName: string;
    carCategoryName: string;
    carCategoryId:string;
    carLicensePlate: string | null;
    bookingDate: string | null;
    startDate: string;
    returnDate: string;
    loanPlace: string;
    returnPlace: string;
    totalPrice: number;
    status: string;
  }

export default Booking;
