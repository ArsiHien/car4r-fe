import { useSelector } from "react-redux";
import { Button, Card, Input, Typography, Spin } from 'antd';
import "./BookingInfo.css";
import { RootState } from "../../store/store";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

const BookingInfo2 = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const totalPrice = useSelector((state: RootState) => state.booking.totalPrice);
  const selectedCar = useSelector((state: RootState) => state.booking.selectedCar);
  const startDate = useSelector((state: RootState) => state.booking.startDate);
  const returnDate = useSelector((state: RootState) => state.booking.returnDate);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedCar) {
      navigate('/');
    }
  }, [selectedCar, navigate]);

  if (!selectedCar) {
    return null;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  const handleOrder = async () => {
    setLoading(true);
    try {
      const bookingData = {
        customerId: user.id,
        carCategoryId: selectedCar.id,
        bookingDate: dayjs().format('YYYY-MM-DD'),
        startDate: startDate,
        returnDate: returnDate,
        loanPlace: "hanoi",
        returnPlace: "hanoi",
        totalPrice: totalPrice.toString()
      };

      const response = await axios.post('http://localhost:8080/api/bookings', bookingData);
      
      if (response.status === 200 || response.status === 201) {
        alert("Booking successful! Please wait for employee approval.");
        navigate('/booking3');
      }
    } catch (error) {
      console.error('Booking failed:', error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 flex h-[1000px]">
      {loading && (
        <div className="loading-indicator">
          <Spin size="large" />
        </div>
      )}
      <div className="flex flex-col gap-5 w-1/3 ml-10 my-5 pr-5">
        <Card className="bg-white mb-5 py-5">
          <img className="bg-blue-100 h-60 mx-11 mb-5 text-center" src={selectedCar?.mainImage} alt={selectedCar.name} />
          <div className="w-4/5 ml-4">
            <Title level={3} className="text-blue-900 text-center">{selectedCar.name}</Title>
            <hr className="pb-5" />
            <div className="text-xl flex flex-col gap-3">
              <Text className="text-lg">Car Type: {selectedCar.type}</Text>
              <Text className="text-lg">Price: {selectedCar.price.toLocaleString()} USD/day</Text>
              <Text className="text-lg">Fuel: {selectedCar.gasoline}L</Text>
              <Text className="text-lg">Capacity: {selectedCar.numberOfPerson} Person</Text>
            </div>
          </div>
        </Card>
        <Card className="bg-white pl-3 text-sm mb-3">
          <Title level={3} className="text-blue-900 py-5">Bill</Title>
          <hr />
          <div className="text-xl flex flex-col gap-3 py-5">
            <Text className="text-lg">Price: {selectedCar.price.toLocaleString()} USD/day</Text>
            <Text className="text-lg">Number of days: </Text>
            <hr />
            <Text className="text-blue-600 font-bold text-lg">Total: {totalPrice}</Text>
          </div>
        </Card>
        <div className="flex gap-10 justify-center">
          <Button className="w-40 h-12" onClick={handleReturn} type="default">
            Return
          </Button>
          <Button className="w-40 h-12" onClick={handleOrder} type="primary">
            Order
          </Button>
        </div>
      </div>
      <div className="bg-white mr-10 w-3/4 my-5 h-[700px]">
        <Title level={1} className="mx-3 my-3 text-blue-900">THÔNG TIN KHÁCH HÀNG</Title>
        <hr />
        <Title level={2} className="mx-3 my-3">Nhập thông tin cá nhân để tiến hành đặt đơn</Title>
        <div className="px-3">
          <div className="flex my-3">
            <label className="w-1/4 my-3 mr-5 text-left text-xl">Name(*)</label>
            <Input className="w-3/4" value={user.username} />
          </div>
          <div className="flex my-3">
            <label className="w-1/4 my-3 mr-5 text-left text-xl">Phone(*)</label>
            <Input className="w-3/4" value={user.phone} />
          </div>
          <div className="flex my-3">
            <label className="w-1/4 my-3 mr-5 text-left text-xl">Email(*)</label>
            <Input className="w-3/4" value={user.email} />
          </div>
        </div>
        <div className="mx-3 flex flex-1 my-10">
          <h3 className="w-1/4 my-3 mr-5 text-left text-xl">Phương thức thanh toán(*)</h3>
          <div className="w-60">
            <span className="flex flex-col flex-1 gap-3 my-5">
              {['Cash', 'VNPay'].map((method) => (
                <div key={method} className="flex items-center mb-5 border border-sm border-gray-300 h-10 rounded">
                  <Input type="checkbox" className="ml-5 w-5 h-5" />
                  <label className="ml-5 text-sm text-xl text-gray-900 pl-10">{method}</label>
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo2;
