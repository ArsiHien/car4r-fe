import React from "react";
import fuelImg from "../../assets/gas-station.png";
import transmissionImg from "../../assets/CarType.png";
import capacityImg from "../../assets/capacity.png";
import { useNavigate } from "react-router-dom";
import RentButton from "../RentButton";
import CarPrice from "./CarPrice";

export interface CarCardProps {
  carName: string;
  carType: string;
  carImg: string;
  fuel: number;
  transmission: string;
  capacity: number;
  newPrice: number | null;
  price: number;
}

export const CarCard: React.FC<CarCardProps> = ({
  carName,
  carType,
  carImg,
  fuel,
  transmission,
  capacity,
  newPrice,
  price,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/car/${carName}`);
  };
  return (
    <div
      onClick={handleCardClick}
      className="max-w-sm h-96 rounded-lg bg-white p-6 shadow-md hover:scale-105"
    >
      <div className="text-lg font-bold text-[#1a202c]">{carName}</div>
      <div className="mb-4 text-sm text-[#90A3BF]">{carType}</div>

      <div className="mb-4 flex justify-center">
        <img src={carImg} alt="Car" className="h-40 object-contain" />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={fuelImg} alt="Fuel Icon" className="h-6 w-6" />
          <span className="text-sm text-[#90A3BF]">{fuel}L</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={transmissionImg}
            alt="Transmission Icon"
            className="h-6 w-6"
          />
          <span className="text-sm text-[#90A3BF]">{transmission}</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={capacityImg} alt="Capacity Icon" className="h-6 w-6" />
          <span className="text-sm text-[#90A3BF]">{capacity} People</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {newPrice ? (
          <CarPrice price={price} newPrice={newPrice} />
        ) : (
          <CarPrice price={price} />
        )}

        <RentButton></RentButton>
      </div>
    </div>
  );
};
