import React from "react";
import CarPrice from "./CarPrice";
import RentButton from "../RentButton";
import { Rate } from "antd";
import CarAmenities from "./CarAmenities";
import { CarCategoryDetail } from "../../types/CarCategoryDetail";

const CarDetailCard: React.FC<CarCategoryDetail> = ({
  name,
  type,
  description,
  numberOfPerson,
  steering,
  gasoline,
  price,
  promotionPrice,
  rating,
  reviewersCount,
  amenities,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg m-4 p-6 border border-blue-200 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
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
          <span className="font-semibold text-gray-800">{type}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Capacity:</span>
          <span className="font-semibold text-gray-800">
            {numberOfPerson} Person
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Steering :</span>
          <span className="font-semibold text-gray-800 capitalize">
            {steering.toLowerCase()}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Gasoline:</span>
          <span className="font-semibold text-gray-800">{gasoline} L</span>
        </div>
      </div>
      <h1 className="text-xl font-semibold pt-4">Other Amenities</h1>
      <CarAmenities amenitiesName={amenities.map(amenity => amenity.name)}></CarAmenities>

      <div className="flex items-center justify-between">
        {promotionPrice ? (
          <CarPrice price={price} promotionPrice={promotionPrice} />
        ) : (
          <CarPrice price={price} />
        )}
        <RentButton></RentButton>
      </div>
    </div>
  );
};

export default CarDetailCard;
