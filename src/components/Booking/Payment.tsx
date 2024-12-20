import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Card, Typography, Divider } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const { Title, Text } = Typography;

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const selectedCar = useSelector((state: RootState) => state.booking.selectedCar);
  const totalPrice = useSelector((state: RootState) => state.booking.totalPrice);
  const [amount, setAmount] = useState<number>(totalPrice * 25500);

    

  const handleReturn = () => {
    navigate(-1);
  };

  const handlePayment = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/payment/vn-pay?amount=${amount}&bankCode=NCB`);
      const data = await response.json();
      if (data.code === 200) {
        setPaymentUrl(data.data.paymentUrl);
        
        // Start polling for payment status
        const interval = setInterval(async () => {
          const callbackResponse = await fetch(`http://localhost:8080/api/payment/vn-pay-callback?vnp_ResponseCode=00`);
          const callbackData = await callbackResponse.json();
          if (callbackData.code === 200 && callbackData.data.code === "00") {
            clearInterval(interval); // Stop polling
            navigate('/booking4'); // Navigate to booking page
            window.close(); // Close the current tab/window
          }
        }, 5000); // Poll every 5 seconds
      } else {
        console.error("Payment error:", data.message);
      }
    } catch (error) {
      console.error("Error fetching payment URL:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col w-1/3 ml-5 my-5">
        <Card className="bg-white">
          <Title level={3} className="text-blue-900 text-center">Thông tin đơn đặt xe</Title>
          <Divider />
          <div className="flex flex-col gap-3">
            <Title level={4} className="text-blue-600">Thông tin xe đặt</Title>
            <div className="flex justify-between">
              <Text>Name:</Text>
              <Text className="text-right">{selectedCar?.name}</Text>
            </div>
            <div className="flex justify-between">
              <Text>Car Type:</Text>
              <Text className="text-right">{selectedCar?.type}</Text>
            </div>
            <div className="flex justify-between">
              <Text>Price:</Text>
              <Text className="text-right">{selectedCar?.promotionPrice} USD/day</Text>
            </div>
            <div className="flex justify-between">
              <Text>Fuel:</Text>
              <Text>{selectedCar?.gasoline}</Text>
            </div>
            <div className="flex justify-between">
              <Text>Capacity:</Text>
              <Text>{selectedCar?.numberOfPerson}</Text>
            </div>
          </div>
        </Card>
        <Divider />
        <Card className="bg-white">
          <Title level={4} className="text-blue-600">Bill</Title>
          <div className="flex justify-between">
            <Text>Total:</Text>
            <Text className="text-right">{totalPrice} USD</Text>
          </div>
        </Card>
        <div className="flex justify-center items-center py-5">
          <Button className="px-20 h-10 mr-4" onClick={handleReturn} type="default">
            Return
          </Button>
          <Button className="px-20 h-10" onClick={handlePayment} type="primary">
            Pay Now
          </Button>
        </div>
        {paymentUrl && (
          <div className="flex justify-center items-center py-5">
            <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              Click here to complete your payment
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
