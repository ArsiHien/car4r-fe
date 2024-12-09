import { Link } from "react-router-dom";
import CarMap from "./CarMap";
import CurrentRentalsList from "./CurrentRentalsList";
import { useDispatch, useSelector } from "react-redux";

import { Car, fetchCarsByStatus } from "../../store/Car/carSlice";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { setSelectedCarID } from "../../store/Car/selectedCarSlice";
const RentalDetails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars } = useSelector(
    (state: RootState) => state.cars
  );

  const selectedCarId = useSelector((state: RootState) => state.selectedCar.selectedCarID)

  const handleCarSelect = (carId: string) => {
    dispatch(setSelectedCarID(carId)); // Update selected car ID
  };

  useEffect(() => {
    dispatch(fetchCarsByStatus("Rented")); 
  }, [dispatch]);

  useEffect(() =>{
    if(cars.length > 0 && selectedCarId === null){
      dispatch(setSelectedCarID(cars[0].id));
    }
  }, [cars, dispatch, selectedCarId])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Details Rental Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">Details Rental</h2>

          {/* Map Section */}
          <div className="bg-gray-100 h-96 rounded-lg mb-20">
            <CarMap></CarMap>
          </div>

          {/* Car Details */}
          <div className="flex items-center mb-6">
            <img
              src={cars.length > 0 ? cars.find(car => car.id === selectedCarId)?.mainImage : ""}
              alt="Car"
              className="h-16 w-24 mr-4 rounded-lg"
            />
            <div>
            <h3 className="text-lg font-semibold">{cars.length > 0 ? cars.find(car => car.id === selectedCarId)?.categoryName : "bla"}</h3>
              <p className="text-gray-500">{cars.length > 0 ? cars.find(car => car.id === selectedCarId)?.categoryType : "bla"}</p>
              <p className="text-gray-500">{cars.length > 0 ? cars.find(car => car.id === selectedCarId)?.licensePlate : "bla"}</p>
            </div>
          </div>

          {/* Pick-Up Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h4 className="font-semibold">Pick - Up</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="text-sm text-gray-500">Locations</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>{cars.length > 0 ? cars.find(car => car.id === selectedCarId)?.currentBookingLoanPlace:"bla"}</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-sm text-gray-500">Date</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  {/* <option>{cars.length > 0 ?cars[0].currentBookingStartDate.toDateString() :"bla"}</option> */}
                </select>
              </div>
            </div>
          </div>

          {/* Drop-Off Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 border-2 border-blue-500 rounded-full"></div>
              <h4 className="font-semibold">Drop - Off</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="text-sm text-gray-500">Locations</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>{cars.length > 0 ? cars.find(car => car.id === selectedCarId)?.currentBookingReturnPlace:"bla"}</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-sm text-gray-500">Date</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>21 July 2022</option>
                </select>
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Rental Price</p>
              <p className="text-sm text-gray-400">
                Overall price and includes rental discount
              </p>
            </div>
            <p className="text-2xl font-bold">$80.00</p>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Transaction</h2>
            <button className="text-blue-500 text-sm">
              <Link to="/management/cars">View All</Link>
            </button>
          </div>

          <CurrentRentalsList onCarSelect={handleCarSelect} />
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;