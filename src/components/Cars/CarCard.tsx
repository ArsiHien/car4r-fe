import React from "react";
import fuelImg from "../../assets/gas-station.png";
import transmissionImg from "../../assets/CarType.png";
import capacityImg from "../../assets/capacity.png";
import { useNavigate } from "react-router-dom";
import CarPrice from "./CarPrice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setSelectedCar } from "../../store/Booking/bookingSlice";
import { fetchCarCategory } from "../../store/CarCategory/carCategoryActions";

export interface CarCardProps {
  id: string;
  name: string;
  type: string;
  mainImage: string;
  gasoline: number;
  steering: string;
  numberOfPerson: number;
  promotionPrice: number | null;
  price: number;
}

export const CarCard: React.FC<CarCardProps> = ({
  id,
  name,
  type,
  mainImage,
  gasoline,
  steering,
  numberOfPerson,
  promotionPrice,
  price,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleCardClick = () => {
    navigate(`/car/${name}-${id}`);
  };
  const { carCategories } = useSelector(
    (state: RootState) => state.carCategory
  );

  const handleRentNow = async () => {
    let selectedCar = carCategories.find((car) => car.id === id);
    if (!selectedCar) {
      const actionResult = await dispatch(fetchCarCategory(id));

      if (fetchCarCategory.fulfilled.match(actionResult)) {
        selectedCar = actionResult.payload;
      } else {
        console.error("Failed to fetch the car category");
        return;
      }
    }

    dispatch(
      setSelectedCar({
        id,
        name,
        type,
        numberOfPerson,
        steering,
        gasoline,
        price,
        promotionPrice,
        rating: selectedCar?.rating || 5,
        mainImage,
        carImages: selectedCar?.carImages || [],
        description: "",
        reviewersCount: 0,
        amenities: [],
        reviews: [],
      })
    );
    navigate("/booking");
  };

  return (
    <div
      onClick={handleCardClick}
      className="max-w-sm h-96 rounded-lg bg-white p-6 shadow-md hover:scale-105"
    >
      <div className="text-lg font-bold text-[#1a202c]">{name}</div>
      <div className="mb-4 text-sm text-[#90A3BF]">{type}</div>

      <div className="mb-4 flex justify-center">
        <img src={mainImage} alt="Car" className="h-40 object-contain" />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={fuelImg} alt="Fuel Icon" className="h-6 w-6" />
          <span className="text-sm text-[#90A3BF]">{gasoline}L</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={transmissionImg}
            alt="Transmission Icon"
            className="h-6 w-6"
          />
          <span className="text-sm text-[#90A3BF]">{steering}</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={capacityImg} alt="Capacity Icon" className="h-6 w-6" />
          <span className="text-sm text-[#90A3BF]">
            {numberOfPerson} People
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {promotionPrice ? (
          <CarPrice price={price} promotionPrice={promotionPrice} />
        ) : (
          <CarPrice price={price} />
        )}

        <button
          className="rounded-lg bg-[#3563E9] px-6 py-2 text-white hover:bg-[#274bb1]"
          onClick={(e) => {
            e.stopPropagation();
            handleRentNow();
          }}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};
