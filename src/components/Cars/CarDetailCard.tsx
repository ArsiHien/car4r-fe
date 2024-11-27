import React from "react";
import CarPrice from "./CarPrice";
import RentButton from "../RentButton";
import { Rate } from "antd";
import CarAmenities from "./CarAmenities";

type CarDetailCardProps = {
  carName: string;
  carType: string;
  description: string;
  capacity: number;
  steering: string;
  fuel: number;
  price: number;
  newPrice: number | null;
  rating: number;
  reviewersCount: number;
  amenities: string[];
};

const CarDetailCard: React.FC<CarDetailCardProps> = ({
  carName,
  carType,
  description,
  capacity,
  steering,
  fuel,
  price,
  newPrice,
  rating,
  reviewersCount,
  amenities,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg m-4 p-6 border border-blue-200 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{carName}</h3>
          <Rate allowHalf disabled defaultValue={rating} />
          <span className="text-sm text-gray-600 ml-8">
            {reviewersCount} Reviewer
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{description}</p>

      <div className="grid grid-cols-2 gap-x-36 my-4">
        <div className="flex justify-between items-center">
          <span>Type Car:</span>
          <span className="font-semibold text-gray-800">{carType}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Capacity:</span>
          <span className="font-semibold text-gray-800">{capacity} Person</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Steering :</span>
          <span className="font-semibold text-gray-800">{steering}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Gasoline:</span>
          <span className="font-semibold text-gray-800">{fuel} L</span>
        </div>
      </div>
      <h1 className="text-xl font-semibold pt-4">Other Amenities</h1>
      <CarAmenities amenitiesName={amenities}></CarAmenities>

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

export default CarDetailCard;
