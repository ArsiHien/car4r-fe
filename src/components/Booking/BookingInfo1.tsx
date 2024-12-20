import "./BookingInfo.css";
import { DatePicker, Card, Button, Typography } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import CarImage from "../../components/Cars/CarImage";
import { useState } from 'react';
import dayjs from 'dayjs';
import { setTotalPrice, setStartDate, setReturnDate } from '../../store/Booking/bookingSlice'

const { Title, Text } = Typography;

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
    <div className="bg-gray-200 flex h-full text-xl p-5">
      {/**left container */}
      <div className="flex flex-col w-2/3 mr-5">
        {/**left top section */}
        <Card className="mb-5" bordered={false}>
          <div className="flex">
            {/**image section */}
            <div className="flex flex-col w-1/2">
              <CarImage images={[selectedCar.mainImage, ...selectedCar.carImages.map(image => image.imageUrl)]} />
            </div>

            {/**information section */}
            <div className="flex flex-col w-1/2 pl-5">
              <Title level={3} className="text-blue-900">{selectedCar.name}</Title>
              <Text className="text-gray-600 text-lg">Rating: {selectedCar.rating}</Text>
              <div className="flex flex-col gap-2 mt-3">
                <Text className="text-lg">Car Type: {selectedCar.type}</Text>
                <Text className="text-lg">Price: {selectedCar.price.toLocaleString()} USD/day</Text>
                <Text className="text-lg">Fuel: {selectedCar.gasoline}L</Text>
                <Text className="text-lg">Capacity: {selectedCar.numberOfPerson} Person</Text>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/**right container */}
      <div className="flex flex-col w-1/3">
        {/**date section */}
        <Card className="mb-5" bordered={false}>
          <Title level={3} className="text-blue-900">Thời gian thuê</Title>
          <RangePicker
            format="DD/MM/YYYY"
            className="w-full text-3xl"
            placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
            onChange={handleDateChange}
          />
        </Card>
        {/**bill section */}
        <Card className="mb-5" bordered={false}>
          <Title level={3} className="text-blue-900">Bill</Title>
          <div className="flex flex-col gap-3">
            <Text>Price: {selectedCar.price.toLocaleString()} USD/day</Text>
            <Text>Total: {total} USD</Text>
          </div>
        </Card>
        {/**button section */}
        <div className="flex flex-col gap-3">
          <Button type="primary" className="h-10 text-xl" onClick={handleOrder}>
            Order
          </Button>
          <Button className="h-10 text-xl" onClick={handleReturn}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo1;
