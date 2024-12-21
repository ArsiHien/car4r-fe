import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Input, Typography, Spin, Radio } from "antd";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { setPaymentMethod } from "../../store/Booking/bookingSlice";

const { Title, Text } = Typography;

interface BookingInfo2Props {
  onNext: () => void;
  onPrevious: () => void;
}

const BookingInfo2: React.FC<BookingInfo2Props> = ({ onNext, onPrevious }) => {
  const user = useSelector((state: RootState) => state.user.user);
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
  const paymentMethod = useSelector(
    (state: RootState) => state.booking.paymentMethod
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedCar) {
      navigate("/");
    }
  }, [selectedCar, navigate]);

  if (!selectedCar) {
    return null;
  }

  const buttonText = paymentMethod === "Cash" ? "Finish" : "Payment";

  const handlePrevious = () => {
    onPrevious();
  };

  const handlePayment = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/payment/vn-pay?amount=${
          totalPrice * 25500
        }&bankCode=NCB`
      );
      const data = await response.json();
      if (data.code === 200) {
        const paymentWindow = window.open(data.data.paymentUrl, "_blank");

        const interval = setInterval(async () => {
          const callbackResponse = await fetch(
            `http://localhost:8080/api/payment/vn-pay-callback?vnp_ResponseCode=00`
          );
          const callbackData = await callbackResponse.json();
          if (callbackData.code === 200 && callbackData.data.code === "00") {
            clearInterval(interval);
            onNext();
            if (paymentWindow) {
              paymentWindow.close();
            }
          }
        }, 5000); // Poll every 5 seconds
      } else {
        console.error("Payment error:", data.message);
      }
    } catch (error) {
      console.error("Error fetching payment URL:", error);
    }
  };

  const handleOrder = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setLoading(true);
    try {
      const bookingData = {
        customerId: user.id,
        carCategoryId: selectedCar.id,
        bookingDate: dayjs().format("YYYY-MM-DD"),
        startDate: startDate,
        returnDate: returnDate,
        loanPlace: pickupPlace,
        returnPlace: dropOffPlace,
        totalPrice: totalPrice.toString(),
        paymentMethod: paymentMethod,
      };

      const response = await axios.post(
        "http://localhost:8080/api/bookings",
        bookingData
      );

      if (response.status === 200 || response.status === 201) {
        alert("Booking successful! Please wait for employee approval.");
        if (paymentMethod === "Cash") {
          onNext();
        } else {
          await handlePayment();
        }
      }
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      {loading && (
        <div className="loading-indicator absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black z-50">
          <Spin size="large" />
        </div>
      )}

      {/* Car Information Card */}
      <div className="flex flex-col gap-5 w-2/5 ml-10 my-5 pr-5">
        <Card className="bg-white h-full mb-5 py-5 shadow-md">
          <img
            className="rounded-lg mx-auto mb-5 h-60 object-cover"
            src={selectedCar.mainImage}
            alt={selectedCar.name}
          />
          <div className="w-4/5 mx-auto text-center">
            <Title level={3} className="text-blue-900">
              {selectedCar.name}
            </Title>
            <hr className="my-5" />
            <div className="flex flex-col gap-3 py-5">
              <Text className="text-blue-600 font-bold text-2xl">
                Total Price: {totalPrice} USD
              </Text>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <Card className="bg-white my-5 h-fit mx-auto rounded-lg shadow-md p-6">
          <Title level={1} className="text-blue-900">
            Customer Information
          </Title>
          <hr className="my-4" />
          <Title level={2}>
            Enter personal information to proceed with the booking
          </Title>
          <div className="space-y-5">
            <div className="flex">
              <label className="w-2/5 text-xl">Name (*)</label>
              <Input className="w-3/5" value={user.username} disabled />
            </div>
            <div className="flex">
              <label className="w-2/5 text-xl">Phone (*)</label>
              <Input className="w-3/5" value={user.phone} disabled />
            </div>
            <div className="flex">
              <label className="w-2/5 text-xl">Email (*)</label>
              <Input className="w-3/5" value={user.email} disabled />
            </div>
            <div className="flex">
              <label className="w-2/5 text-xl">Payment Method (*)</label>
              <Radio.Group
                className="w-3/5"
                onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
                value={paymentMethod}
              >
                <Radio value="Cash">Cash</Radio>
                <Radio value="VNPay">VNPay</Radio>
              </Radio.Group>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-10 justify-center mt-6">
          <Button className="w-40 h-12" onClick={handlePrevious} type="default">
            Previous
          </Button>
          <Button className="w-40 h-12" onClick={handleOrder} type="primary">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo2;
