import { useSelector } from "react-redux";
import "./BookingInfo.css";
import { RootState } from "../../store/store";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Spin } from 'antd';

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
        loanPlace: "hanoi", // You might want to make this dynamic
        returnPlace: "hanoi", // You might want to make this dynamic
        totalPrice: totalPrice.toString()
      };
      console.log(selectedCar);

      const response = await axios.post('http://localhost:8080/api/bookings', bookingData);
      
      if (response.status === 200 || response.status === 201) {
        alert("Booking successful! Please wait for employee approval.");
        navigate('/');
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
        <div className="loading-indicator">Loading...</div>
      )}
      {/**left container */}
      <span className="flex flex-col gap-5 w-1/3 ml-10 my-5 pr-5">
        {/**car information seciton */}
        <div className="bg-white mb-5 py-5">
          <img className="bg-blue-100 h-60 mx-11 mb-5 text-center" src={selectedCar?.mainImage}>
          </img>
          <div className=" w-4/5 ml-4">
            <h3 className="text-2xl text-blue-900 font-bold pb-5 text-center">
              {selectedCar.name}
            </h3>
            <hr className="pb-5" />
            <div className="text-xl flex flex-col gap-3">
              <label>Car Type: {selectedCar.type}</label>
              <label>Price: {selectedCar.price.toLocaleString()} USD/day</label>
              <label>Fuel: {selectedCar.gasoline}L</label>
              <label>Capacity: {selectedCar.numberOfPerson} Person</label>
            </div>
          </div>
        </div>
        {/**bottom left container */}
        <div className="">
          <div className="bg-white pl-3 text-sm mb-3 ">
            <h3 className="text-2xl text-blue-900 font-bold py-5">Bill</h3>
            <hr />
            <div className="text-xl flex flex-col gap-3 py-5">
              <label>Price: {selectedCar.price.toLocaleString()} USD/day</label>
              <label>Number of days: </label>
              <hr className="" />
              <label className="text-blue-600 font-bold">Total: {totalPrice}</label>
            </div>
          </div>
        </div>
        {/**button section */}
        <div className="flex gap-10 justify-center">
          <button className="text-white bg-gray-600 text-xl w-40 h-12 hover:bg-gray-400 rounded focus:outline-none" onClick={handleReturn}>
            Return
          </button>
          <button className="text-white bg-blue-900 text-xl w-40 h-12 hover:bg-blue-600 rounded focus:outline-none" onClick={handleOrder}>
            Order
          </button>
        </div>
      </span>
      {/**right container */}
      <span className="bg-white mr-10 w-3/4 my-5 h-[700px]">
        <h1 className="text-xl font-bold text-blue-900 mx-3 my-3">
          THÔNG TIN KHÁCH HÀNG
        </h1>
        <hr />
        <h2 className="text-xl mx-3 my-3">
          Nhập thông tin cá nhân để tiến hành đặt đơn
        </h2>
        <div className="px-3">
          <div className="flex my-3">
            <label className="w-1/4  my-3 mr-5 text-left text-xl">
              Name(*)
            </label>
            <input
              type="text"
              className="w-3/4 border border-gray-300 p-2 rounded"
              value={user.username}
            />
          </div>
          <div className="flex my-3">
            <label className="w-1/4 my-3 mr-5 text-left text-xl">
              Phone(*)
            </label>
            <input
              type="text"
              className="w-3/4 border border-gray-300 p-2 rounded"
              value={user.phone}
            />
          </div>
          <div className="flex my-3">
            <label className="w-1/4 my-3 mr-5 text-left text-xl">
              Email(*)
            </label>
            <input
              type="text"
              className="w-3/4 border border-gray-300 p-2 rounded"
              value={user.email}
            />
          </div>
        </div>
        <div className="mx-3 flex flex-1 my-10">
          <h3 className="w-1/4 my-3 mr-5 text-left text-xl">
            Phương thức thanh toán(*)
          </h3>
          <div className="w-60">
            <span className="flex flex-col flex-1 gap-3 my-5">
              <div className="flex items-center mb-5 border border-sm border-gray-300 h-10 rounded">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="ml-5 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className=" ml-5 text-sm text-xl text-gray-900 dark:text-gray-300 pl-10">
                  Cash
                </label>
              </div>
              <div className="flex items-center mb-5 border border-sm border-gray-300 h-10 rounded">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="ml-5 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className=" ml-5 text-sm text-xl text-gray-900 dark:text-gray-300 pl-10">
                  Momo
                </label>
              </div>
              <div className="flex items-center mb-5 border border-sm border-gray-300 h-10 rounded">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="ml-5 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className=" ml-5 text-sm text-xl text-gray-900 dark:text-gray-300 pl-10">
                  ZaloPay
                </label>
              </div>
              <div className="flex items-center mb-5 border border-sm border-gray-300 h-10 rounded">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="ml-5 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className=" ml-5 text-sm text-xl text-gray-900 dark:text-gray-300 pl-10">
                  VNPay
                </label>
              </div>
            </span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default BookingInfo2;
