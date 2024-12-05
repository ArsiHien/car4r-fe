import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Car, fetchCarsByStatus } from "../../store/Car/carSlice";
import { AppDispatch, RootState } from "../../store/store";
import { setSelectedCarID } from "../../store/Car/selectedCarSlice";

const CurrentRentalsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, loading, error } = useSelector(
    (state: RootState) => state.cars
  );
  const selectedCarId = useSelector((state: RootState) => state.selectedCar.selectedCarID)

  useEffect(() => {
    dispatch(fetchCarsByStatus("rented"));
  }, [dispatch]);

  useEffect(() =>{
    if(cars.length > 0 && selectedCarId === null){
      dispatch(setSelectedCarID(cars[0].id));
    }
  }, [cars, dispatch, selectedCarId])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleCarClick = (car: Car) => {
    dispatch(setSelectedCarID(car.id))
  }

  return (
    <div className="space-y-4">
      {cars.map((car, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white p-4 rounded-lg"
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
