import React from "react";
import CarPrice from "./CarPrice";
import { Rate } from "antd";
import CarAmenities from "./CarAmenities";
import { CarCategoryDetail } from "../../types/CarCategoryDetail";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedCar } from "../../store/Booking/bookingSlice";
import { RootState } from "../../store/store";
import Role from "../../const/Role";
import { fetchCarCategory } from "../../store/CarCategory/carCategoryActions";
import routes from "../../config/routes";

const CarDetailCard: React.FC<CarCategoryDetail> = ({
  id,
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
  mainImage,
  carImages,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state: RootState) => state.auth.role);
  const { carCategories } = useSelector(
    (state: RootState) => state.carCategory
  );

  const handleRentNow = () => {
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
        rating,
        mainImage,
        carImages,
        description: "",
        reviewersCount: 0,
        amenities: [],
        reviews: [],
      })
    );
    navigate("/booking"); // Assuming this is your booking route
  };

  const handleEdit = async () => {
    const carCategory = carCategories.find((car) => car.id === id);

    const editUrl =
      role === Role.MANAGER
        ? routes.manager.editCar.replace(":id", id)
        : routes.staff.editCar.replace(":id", id);

    navigate(editUrl, { state: { carCategory } });
  };

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
      <CarAmenities
        amenitiesName={amenities.map((amenity) => amenity.name)}
      ></CarAmenities>

      <div className="flex items-center justify-between">
        {promotionPrice ? (
          <CarPrice price={price} promotionPrice={promotionPrice} />
        ) : (
          <CarPrice price={price} />
        )}
        {role === Role.CUSTOMER ? (
          <button
            className="rounded-lg bg-[#3563E9] px-6 py-2 text-white hover:bg-[#274bb1]"
            onClick={(e) => {
              e.stopPropagation();
              handleRentNow();
            }}
          >
            Edit
          </button>
        ) : (
          <button
            className="rounded-lg bg-[#3563E9] px-6 py-2 text-white hover:bg-[#274bb1]"
            onClick={(e) => {
              e.stopPropagation();
              handleEdit();
            }}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default CarDetailCard;
