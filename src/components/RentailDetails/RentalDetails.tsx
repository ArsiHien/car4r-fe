import { Link } from "react-router-dom";
import CarMap from "./CarMap";
import CurrentRentalsList from "./CurrentRentalsList";
import { useDispatch, useSelector } from "react-redux";

import { fetchCarsByStatus } from "../../store/Car/carSliceByStatus";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { setSelectedCarID } from "../../store/Car/selectedCarSlice";
const RentalDetails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { carsByStatus } = useSelector((state: RootState) => state.carsByStatus);
  // const userRole = useSelector((state: RootState) => state.user.user.role); // Assuming you have user role in your state
  // console.log(userRole);

  const selectedCarId = useSelector((state: RootState) => state.selectedCar.selectedCarID);
  // const getCarsManagementLink = () => {
  //   if (userRole === "MANAGER") {
  //     return "/management/manager/cars"; // Link for manager
  //   } else if (userRole === "STAFF") {
  //     return "/management/staff/cars"; // Link for staff
  //   }
  // };

  const handleCarSelect = (carId: string) => {
    dispatch(setSelectedCarID(carId)); // Update selected car ID
  };

  useEffect(() => {
    dispatch(fetchCarsByStatus("Rented")); 
  }, [dispatch]);

  useEffect(() =>{
    if(carsByStatus.length > 0 && selectedCarId === null){
      dispatch(setSelectedCarID(carsByStatus[0].id));
    }
  }, [carsByStatus, dispatch, selectedCarId])

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
              src={carsByStatus.length > 0 ? carsByStatus.find(car => car.id === selectedCarId)?.mainImage : ""}
              alt="Car"
              className="h-16 w-24 mr-4 rounded-lg"
            />
            <div>
            <h3 className="text-lg font-semibold">{carsByStatus.length > 0 ? carsByStatus.find(car => car.id === selectedCarId)?.categoryName : "bla"}</h3>
              <p className="text-gray-500">{carsByStatus.length > 0 ? carsByStatus.find(car => car.id === selectedCarId)?.categoryType : "bla"}</p>
              <p className="text-gray-500">{carsByStatus.length > 0 ? carsByStatus.find(car => car.id === selectedCarId)?.licensePlate : "bla"}</p>
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
                  <option>{carsByStatus.length > 0 ? carsByStatus.find(car => car.id === selectedCarId)?.currentBookingLoanPlace:""}</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-sm text-gray-500">Date</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>{carsByStatus.length > 0 ? carsByStatus.find(car => car.id === selectedCarId)?.currentBookingStartDate:""}</option>
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
                  <option>{carsByStatus.length > 0 ? carsByStatus.find(car => car.id === selectedCarId)?.currentBookingReturnPlace:""}</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-sm text-gray-500">Date</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>{carsByStatus.length > 0 ? carsByStatus.find(car => car.id === selectedCarId)?.currentBookingReturnDate:""}</option>
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
            <p className="text-2xl font-bold">{carsByStatus.length > 0 ? carsByStatus.find(car => car.id === selectedCarId)?.currentBookingTotalPrice:""}$</p>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Transaction</h2>
            {/* <button className="text-blue-500 text-sm">
              <Link to={getCarsManagementLink()}>View All</Link>
            </button> */}
          </div>

          <CurrentRentalsList onCarSelect={handleCarSelect} />
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
