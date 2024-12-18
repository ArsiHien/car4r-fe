import "./BookingInfo.css";
import { DatePicker } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import CarImage from "../../components/Cars/CarImage";
import { useState } from 'react';
import dayjs from 'dayjs';
import { setTotalPrice, setStartDate, setReturnDate } from '../../store/Booking/bookingSlice'

const BookingInfo1 = () => {
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;
  const navigate = useNavigate();
  const selectedCar = useSelector((state: RootState) => state.booking.selectedCar);
  console.log(selectedCar)
  // Redirect if no car is selected
  if (!selectedCar) {
    navigate('/');
    return null;
  }

  const [dateRange, setDateRange] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null]>([null, null]);
  const [total, setTotal] = useState<number>(0);

  const handleDateChange = (dates: [dayjs.Dayjs | null, dayjs.Dayjs | null]) => {
    setDateRange(dates);

    if (dates[0] && dates[1]) {
      const days = dates[1].diff(dates[0], 'day');
      const totalPrice = selectedCar.price * days;
      setTotal(totalPrice);
      dispatch(setTotalPrice(totalPrice));
      dispatch(setStartDate(dates[0].format('YYYY-MM-DD')));
      dispatch(setReturnDate(dates[1].format('YYYY-MM-DD')));
    } else {
      setTotal(0);
      dispatch(setTotalPrice(0));
      dispatch(setStartDate(null));
      dispatch(setReturnDate(null));
    }
  };

    dispatch(setTotalPrice(total));

    const handleReturn = () => {
      navigate(-1);
    };

  const handleOrder = () => {
    if (!dateRange[0] || !dateRange[1]) {
      alert("Please select a date range before ordering.");
      return; // Exit the function if date range is not valid
    }
    dispatch(setTotalPrice(total));
    navigate('/bookingInfo2');
  };

  return (
    <div className="bg-gray-200 flex h-[800px] text-xl">
      {/**left container */}
      <span className="flex flex-col w-2/3 ml-10 my-5 mr-5 h-[600px]">
        {/**left top section */}
        <div className="flex bg-white h-[500px]">
          {/**image section */}
          <div className=" flex flex-col w-1/2 ml-5 my-5 ">
            <CarImage images={[selectedCar.mainImage, ...selectedCar.carImages.map(image => image.imageUrl)]} />
          </div>

          {/**information section */}
          <div className="bg-white w-1/2 my-5 mr-5">
            <div className="pl-5">
              <div>
                <h3 className="bg-blue-100 text-3xl text-center text-blue-900 font-bold py-5">
                  {selectedCar.name}
                </h3>
                <h3 className="bg-gray-300 text-xl text-center text-white font-bold mt-3 py-3">
                  Rating: {selectedCar.rating}
                </h3>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <label>Car Type: {selectedCar.type}</label>
                <label>Price: {selectedCar.price.toLocaleString()} USD/day</label>
                <label>Fuel: {selectedCar.gasoline}L</label>
                <label>Capacity: {selectedCar.numberOfPerson} Person</label>
              </div>
            </div>
          </div>
        </div>
        {/**bottom left container*/}
        <div className="bg-white my-5 h-[300px]">
          <h3 className="text-2xl text-blue-900 font-bold py-5 pl-5">
            {/* Thông tin chi tiết */}
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
          <div className="flex items-center justify-between space-x-4">
            <div className="flex-1">
              <RangePicker
                format="DD/MM/YYYY"
                className="w-full text-3xl"
                placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
                onChange={handleDateChange}
              />
            </div>
          </div>
        </div>
        {/**bill section */}
        <div className="bg-white pl-3 text-xl">
          <h3 className="text-2xl text-blue-900 font-bold py-5">Bill</h3>
          <hr className="pb-5" />
          <div className="flex flex-col gap-3 pb-5">
            <label>Price: {selectedCar.price.toLocaleString()} USD/day</label>
            <label>Total: {total} USD</label>
          </div>
        </div>
        {/**button section */}
        <div className=" bg-white flex flex-col gap-3 py-3">
          <button className="h-10 text-white bg-blue-600 text-xl mx-10 hover:bg-blue-600 rounded focus:outline-none" onClick={handleOrder}>
            Order
          </button>
          <button className="h-10 text-white bg-gray-600 text-xl mx-10 hover:bg-blue-600 rounded focus:outline-none" onClick={handleReturn}>
            Return
          </button>
        </div>
      </span>
    </div>
  );
};

export default BookingInfo1;
