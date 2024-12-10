import { useEffect, useState } from "react";
import { Alert } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import routes from "../../config/routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addCar, fetchCarsByCategory } from "../../store/Car/carSlice";
import { CarCategoryDetail } from "../../types/CarCategoryDetail";

const CarCard: React.FC<{ carCategory: CarCategoryDetail; isExpanded: boolean; onToggle: () =>void }> = ({
  carCategory,
  isExpanded,
  onToggle,
}) => {

  const [isLoadingCars, setIsLoadingCars] = useState(false); // New state for loading cars

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [newCar, setNewCar] = useState({ licensePlate: "", status: "" }); // State for new car details

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { cars, loading, error } = useSelector(
    (state: RootState) => state.cars
  );

  // useEffect(() => {
  //   dispatch(fetchCarsByCategory(carCategory.id));
  // }, [dispatch, isExpanded, carCategory.id]);

  const handleDropdownToggle = () => {
    onToggle(); // Call the function to toggle the expanded state in the parent
    if (!isExpanded) {
      setIsLoadingCars(true); // Set loading state to true
      dispatch(fetchCarsByCategory(carCategory.id)).unwrap()
        .finally(() => setIsLoadingCars(false)); // Reset loading state after fetching
    }
  };
  const handleCarCategoryEditClick = () => {
    const editUrl = location.pathname.includes(routes.manager.overview)
      ? routes.manager.editCar.replace(":id", carCategory.id)
      : routes.staff.editCar.replace(":id", carCategory.id);

    navigate(editUrl, { state: { carCategory } });
  };

  const [alert, setAlert] = useState<{
    message: string;
    type: "info" | "success" | "error";
  } | null>(null);


  const handleAddCar = async () => {
    setNewCar({ licensePlate: "", status: "" });
    const carData = {
      categoryId: carCategory.id, // Use the carCategory ID
      licensePlate: newCar.licensePlate,
      status: newCar.status,
    };
    try {
      setAlert({ message: "Adding car ...", type: "info" });
      await dispatch(addCar(carData)).unwrap();
      setAlert({
        message: "Car added successfully!",
        type: "success",
      });
    } catch (error: any) {
      setAlert({
        message: `Failed to add car : ${error.message}`,
        type: "error",
      });
    }
  };

  return (
    <div className="border-b border-gray-200">
      {/* Main Card */}
      <div
        className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50"
        onClick={handleDropdownToggle}
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
            setIsModalOpen(true);
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

      {/* Modal for Adding Car */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-medium">Add Car</h2>
            {alert && <Alert message={alert.message} type={alert.type} showIcon />}
            <input
              type="text"
              placeholder="License Plate"
              value={newCar.licensePlate}
              onChange={(e) => setNewCar({ ...newCar, licensePlate: e.target.value })}
              className="border p-2 mb-2 w-full"
            />

            <select
              value={newCar.status}
              onChange={(e) => setNewCar({ ...newCar, status: e.target.value })}
              className="border p-2 mb-2 w-full"
            >
              <option value="">Select Status</option>
              <option value="AVAILABLE">AVAILABLE</option>
              <option value="RENTED">RENTED</option>
              <option value="MAINTENANCE">MAINTENANCE</option>
            </select>
            <button onClick={handleAddCar} className="bg-green-500 text-white px-4 py-2 rounded-md">Add</button>
            <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Cancel</button>
          </div>
        </div>
      )}

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

          {isLoadingCars ? ( // Show loading message only when loading
            <div>Loading cars...</div>
          ) : error ? ( // Show error message if there's an error
            <div className="text-red-500">{error}</div>
          ) : cars.length > 0 ? ( // Show car details if available
            cars.map((car) => (
              <div key={car.id} className="grid grid-cols-5 px-4 py-3 items-center hover:bg-gray-50">
                <div className="text-gray-900">{car.categoryName}</div>
                <div className="text-gray-900">{car.licensePlate}</div>
                <div className="text-gray-900">{car.status}</div>
                <div>
                  <button className="px-6 py-1 bg-blue-600 text-white rounded-md text-sm">Map</button>
                </div>
                <div>
                  <button className="px-6 py-1 bg-blue-600 text-white rounded-md text-sm">
                    <Link to={`/management/cars/editCar/${car.id}`}>Edit</Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No cars available.</div> // Message when no cars are found
          )}
        </div>
      )}
    </div>
    
  );
};

export default CarCard;
