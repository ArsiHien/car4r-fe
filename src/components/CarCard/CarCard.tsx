import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import routes from "../../config/routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCarsByCategory } from "../../store/Car/carSlice";
import { CarCategoryDetail } from "../../types/CarCategoryDetail";

const CarCard: React.FC<{ carCategory: CarCategoryDetail }> = ({
  carCategory,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { cars, loading, error } = useSelector(
    (state: RootState) => state.cars
  );

  useEffect(() => {
    dispatch(fetchCarsByCategory(carCategory.id));
  }, [dispatch, isExpanded, carCategory.id]);

  const handleCarCategoryEditClick = () => {
    const editUrl = location.pathname.includes(routes.manager.overview)
      ? routes.manager.editCar.replace(":id", carCategory.id)
      : routes.staff.editCar.replace(":id", carCategory.id);

    navigate(editUrl, { state: { carCategory } });
  };

  return (
    <div className="border-b border-gray-200">
      {/* Main Card */}
      <div
        className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={carCategory.mainImage}
          alt={carCategory.name}
          className="w-24 h-16 object-contain"
        />
        <div>
          <h3 className="font-medium text-gray-900">{carCategory.name}</h3>
          <p className="text-sm text-gray-500">{carCategory.type}</p>
        </div>
        
        <div className="ml-auto flex gap-2">
          <button className="px-4 py-3 bg-green-500 text-white rounded-md text-sm" onClick={(e) => {
              e.stopPropagation(); // Prevent dropdown toggle
              // Edit car category logic here
            }}>
            Add Car
          </button>
          <button className="px-4 py-3 bg-yellow-500 text-white rounded-md text-sm" onClick={(e) => {
            e.stopPropagation(); // Prevent dropdown toggle
            handleCarCategoryEditClick();
          }}>
            Edit Car Category
          </button>
        </div>
      </div>

      {/* Dropdown Content */}
      {isExpanded && (
        <div className="border-t border-gray-100">
          {/* Header */}
          <div className="grid grid-cols-5 px-4 py-2 bg-gray-50 text-sm text-gray-500">
            <div>Car</div>
            <div>Number</div>
            <div>Status</div>
            <div>Map</div>
            <div>Edit</div>
          </div>

          {/* Details */}
          {cars.map((car, index) => (
            <div
              key={index}
              className="grid grid-cols-5 px-4 py-3 items-center hover:bg-gray-50"
            >
              <div className="text-gray-900">{car.categoryName}</div>
              <div className="text-gray-900">{car.licensePlate}</div>
              <div className="text-gray-900">{car.status}</div>
              <div>
                <button className="px-6 py-1 bg-blue-600 text-white rounded-md text-sm">
                  Map
                </button>
              </div>
              <div>
                <button className="px-6 py-1 bg-blue-600 text-white rounded-md text-sm">
                  {/* <Link to={`/management/cars/editCar/${car.id}`}>Edit</Link> */}
                  <Link to="/management/cars/editCar/:1">Edit</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarCard;
