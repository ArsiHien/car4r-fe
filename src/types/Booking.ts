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