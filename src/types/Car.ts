export interface Car {
  id: string;
  licensePlate: string;
  categoryName: string;
  categoryType: string;
  mainImage: string;
  status: string;
  currentBookingStartDate: Date;
  currentBookingReturnDate: Date;
  currentBookingLoanPlace: string;
  currentBookingReturnPlace: string;
  currentBookingTotalPrice: string;
}

export interface addCarApi{
  categoryId: string;
  licensePlate: string;
  status: string;
}