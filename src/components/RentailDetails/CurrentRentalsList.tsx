import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Car, fetchCarsByStatus } from "../../store/Car/carSliceByStatus";
import { AppDispatch, RootState } from "../../store/store";
import { setSelectedCarID } from "../../store/Car/selectedCarSlice";

interface CurrentRentalsListProps {
  onCarSelect: (carId: string) => void; // Add this line
}

const CurrentRentalsList: React.FC<CurrentRentalsListProps> = ({ onCarSelect }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { carsByStatus, loading, error } = useSelector(
    (state: RootState) => state.carsByStatus
  );
  const selectedCarId = useSelector((state: RootState) => state.selectedCar.selectedCarID)

  useEffect(() => {
    dispatch(fetchCarsByStatus("rented"));
  }, [dispatch]);

  useEffect(() =>{
    if(carsByStatus.length > 0 && selectedCarId === null){
      dispatch(setSelectedCarID(carsByStatus[0].id));
    }
  }, [carsByStatus, dispatch, selectedCarId])

  const handleCarClick = (car: Car) => {
    dispatch(setSelectedCarID(car.id))
    onCarSelect(car.id);
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      {carsByStatus.map((car, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white p-4 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer"
          onClick={() => {handleCarClick(car)}}
        >
          <div className="flex items-center">
            <img
              src={car.mainImage}
              alt="Car"
              className="h-12 w-20 mr-4 rounded-lg"
            />
            <div>
              <h3 className="font-semibold">{car.categoryName}</h3>
              <p className="text-sm text-gray-500">{car.categoryType}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{car.licensePlate}</p>
            <p className="font-bold">{car.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentRentalsList;
