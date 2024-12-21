/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Card, Button, Typography, Form, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import CarImage from "../../components/Cars/CarImage";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  setTotalPrice,
  setStartDate,
  setReturnDate,
  setPickupPlace,
  setDropOffPlace,
  resetBookingState,
} from "../../store/Booking/bookingSlice";

const { Title, Text } = Typography;
const { Option } = Select;

interface BookingInfo1Props {
  onNext: () => void;
}

const locations = [
  "My Garage",
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "San Francisco",
];

const BookingInfo1: React.FC<BookingInfo1Props> = ({ onNext }) => {
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [numberOfDay, setNumberOfDay] = useState(0);
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;
  const navigate = useNavigate();
  const selectedCar = useSelector(
    (state: RootState) => state.booking.selectedCar
  );
  const totalPrice = useSelector(
    (state: RootState) => state.booking.totalPrice
  );
  const startDate = useSelector((state: RootState) => state.booking.startDate);
  const returnDate = useSelector(
    (state: RootState) => state.booking.returnDate
  );
  const pickupPlace = useSelector(
    (state: RootState) => state.booking.pickupPlace
  );
  const dropOffPlace = useSelector(
    (state: RootState) => state.booking.dropOffPlace
  );

  const [form] = Form.useForm();

  useEffect(() => {
    if (!selectedCar) {
      navigate("/");
    }
  }, [selectedCar, navigate]);

  useEffect(() => {
    if (selectedCar && numberOfDay >= 0) {
      const totalPrice = selectedCar.price * numberOfDay + deliveryFee;
      dispatch(setTotalPrice(totalPrice));
    }
  }, [numberOfDay, deliveryFee, selectedCar, dispatch]);

  useEffect(() => {
    if (pickupPlace && dropOffPlace) {
      const fee =
        locations.indexOf(pickupPlace) + locations.indexOf(dropOffPlace);
      setDeliveryFee(fee);
    }
  }, [pickupPlace, dropOffPlace]);

  const handleDateChange = (
    dates: [dayjs.Dayjs | null, dayjs.Dayjs | null]
  ) => {
    if (dates[0] && dates[1]) {
      const days = dates[1].diff(dates[0], "day");
      setNumberOfDay(days);
      dispatch(setStartDate(dates[0].format("YYYY-MM-DD")));
      dispatch(setReturnDate(dates[1].format("YYYY-MM-DD")));
    } else {
      dispatch(setTotalPrice(0));
      dispatch(setStartDate(null));
      dispatch(setReturnDate(null));
    }
  };

  const handleLocationChange = (value: string, isPickupLocation: boolean) => {
    if (isPickupLocation) {
      dispatch(setPickupPlace(value));
    } else {
      dispatch(setDropOffPlace(value));
    }
  };

  const handleReturn = () => {
    dispatch(resetBookingState());
    navigate(-1);
  };

  const handleFormSubmit = (values: any) => {
    if (!startDate || !returnDate) {
      alert("Please select a date range before proceeding.");
      return;
    }
    if (!values.pickupLocation || !values.dropOffLocation) {
      alert("Please select pickup and drop-off locations before proceeding.");
      return;
    }
    onNext();
  };

  return (
    <div className="flex h-full text-xl p-5">
      {/** Left container */}
      <div className="flex flex-col w-2/3 mr-5">
        <Card className="mb-5" bordered={false}>
          <div className="flex">
            <div className="flex flex-col w-1/2">
              <CarImage
                images={
                  selectedCar
                    ? [
                        selectedCar.mainImage,
                        ...selectedCar.carImages.map((image) => image.imageUrl),
                      ]
                    : []
                }
              />
            </div>
            <div className="flex flex-col w-1/2 pl-5">
              <Title level={3} className="text-blue-900">
                {selectedCar?.name}
              </Title>

              <div className="flex flex-col gap-2 mt-3">
                <Text className="text-lg">Car Type: {selectedCar?.type}</Text>
                <Text className="text-lg">
                  Price: {selectedCar?.price.toLocaleString()} USD/day
                </Text>
                <Text className="text-lg">Rating: {selectedCar?.rating}</Text>
                <Text className="text-lg">Fuel: {selectedCar?.gasoline}L</Text>
                <Text className="text-lg">
                  Capacity: {selectedCar?.numberOfPerson} Person
                </Text>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/** Right container */}
      <div className="flex flex-col w-1/3">
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Card className="mb-5" bordered={false}>
            <Title level={3} className="text-blue-900">
              Rental Period
            </Title>
            <Form.Item
              name="dateRange"
              rules={[
                { required: true, message: "Please select the rental period!" },
              ]}
            >
              <RangePicker
                format="DD/MM/YYYY"
                className="w-full text-3xl"
                placeholder={["Pickup Date", "Return Date"]}
                onChange={handleDateChange}
                defaultValue={
                  startDate && returnDate
                    ? [
                        dayjs(startDate, "YYYY-MM-DD"),
                        dayjs(returnDate, "YYYY-MM-DD"),
                      ]
                    : undefined
                }
              />
            </Form.Item>
            <Title level={3} className="text-blue-900">
              Pickup and Drop-off
            </Title>
            <div className="flex justify-between gap-4">
              <Form.Item
                className="w-full"
                name="pickupLocation"
                label="Pickup Location"
                initialValue={pickupPlace}
                rules={[
                  {
                    required: true,
                    message: "Please select a pickup location!",
                  },
                ]}
              >
                <Select
                  placeholder="Select pickup location"
                  onChange={(value) => handleLocationChange(value, true)}
                >
                  {locations.map((location) => (
                    <Option key={location} value={location}>
                      {location}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                className="w-full"
                name="dropOffLocation"
                label="Drop-off Location"
                initialValue={dropOffPlace}
                rules={[
                  {
                    required: true,
                    message: "Please select a drop-off location!",
                  },
                ]}
              >
                <Select
                  placeholder="Select drop-off location"
                  onChange={(value) => handleLocationChange(value, false)}
                >
                  {locations.map((location) => (
                    <Option key={location} value={location}>
                      {location}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </Card>

          <Card className="mb-5" bordered={false}>
            <Title level={3} className="text-blue-900">
              Bill Summary
            </Title>
            <div className="flex flex-col gap-3">
              <Text>
                Price per Day: {selectedCar?.price.toLocaleString()} USD
              </Text>
              <Text>
                Number Of Day: {numberOfDay} {numberOfDay <= 1 ? "day" : "days"}
              </Text>
              <Text>Delivery Fee: {deliveryFee} USD</Text>
              <Text>Total Price: {totalPrice} USD</Text>
            </div>
          </Card>

          <div className="flex gap-3">
            <Button
              type="primary"
              className="h-10 text-xl w-full"
              htmlType="submit"
            >
              Order
            </Button>
            <Button className="h-10 text-xl w-full" onClick={handleReturn}>
              Return
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookingInfo1;
