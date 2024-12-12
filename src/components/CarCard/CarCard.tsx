import { useEffect, useState } from "react";
import { Alert, Select } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import routes from "../../config/routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addCar, fetchCarsByCategory, resetCars, updateCar, deleteCar } from "../../store/Car/carSlice";
import { CarCategoryDetail } from "../../types/CarCategoryDetail";
import { Car } from "../../types/Car";

const CarCard: React.FC<{ carCategory: CarCategoryDetail; isExpanded: boolean; onToggle: () => void }> = ({
  carCategory,
  isExpanded,
  onToggle,
}) => {

  const [isModalOpen, setIsNewModalOpen] = useState(false); // State for modal visibility
  const [newCar, setNewCar] = useState({ licensePlate: "", status: "" }); // State for new car details

  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit modal visibility
  const [carToEdit, setCarToEdit] = useState<{ licensePlate: string; status: string, id: string } | null>(null); // State for car to edit

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
      dispatch(resetCars());
      dispatch(fetchCarsByCategory(carCategory.id)); // Fetch cars when dropdown is opened
    } else {
      // Reset cars if the card is collapsed
      dispatch(resetCars());
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

  const handleCarEditClick = (car: Car) => {
    setCarToEdit({ licensePlate: car.licensePlate, status: car.status, id: car.id }); // Set the car data to edit
    setIsEditModalOpen(true); // Open the edit modal
  };


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

  const handleEditCar = async () => {
    if (carToEdit) {
      const carData = {
        categoryId: carCategory.id,
        licensePlate: carToEdit.licensePlate,
        status: carToEdit.status,
      };
      try {
        setAlert({ message: "Editing car ...", type: "info" });
        await dispatch(updateCar({ id: carToEdit.id, carData })).unwrap(); // Call the updateCar action
        setAlert({
          message: "Car edited successfully!",
          type: "success",
        });
        dispatch(fetchCarsByCategory(carCategory.id));
      } catch (error: any) {
        setAlert({
          message: `Failed to edit car: ${error.message}`,
          type: "error",
        });
      }
    }
  };

  const handleDeleteCar = async (carId: string) => {
    try {
      await dispatch(deleteCar(carId)).unwrap(); // Call the deleteCar action
      setAlert({
        message: "Car deleted successfully!",
        type: "success",
      });
      dispatch(fetchCarsByCategory(carCategory.id)); // Refresh the car list
    } catch (error: any) {
      setAlert({
        message: `Failed to delete car: ${error.message}`,
        type: "error",
      });
      console.log(alert.message)
    }
  };

  return (
    <div className="border-b border-gray-200 p-4">
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
            setIsNewModalOpen(true);
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
          <div className="bg-white p-4 rounded-md" style={{ width: '500px' }}>
            <h2 className="text-lg font-medium">Add Car</h2>
            {alert && <Alert message={alert.message} type={alert.type} showIcon />}
            <input
              type="text"
              placeholder="License Plate"
              value={newCar.licensePlate}
              onChange={(e) => setNewCar({ ...newCar, licensePlate: e.target.value })}
              className="border p-2 mb-2 w-full"
            />
            <Select
              placeholder="Select Status"
              value={newCar.status}
              onChange={(value) => setNewCar({ ...newCar, status: value })}
              className="mb-2 w-full"
            >
              <Select.Option value="AVAILABLE">AVAILABLE</Select.Option>
              <Select.Option value="RENTED">RENTED</Select.Option>
              <Select.Option value="MAINTENANCE">MAINTENANCE</Select.Option>
            </Select>
            <button onClick={handleAddCar} className="bg-green-500 text-white px-4 py-2 rounded-md">Add</button>
            <button onClick={() => setIsNewModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Cancel</button>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md" style={{ width: '500px' }}>
            <h2 className="text-lg font-medium">Edit Car</h2>
            {alert && <Alert message={alert.message} type={alert.type} showIcon />}
            <input
              type="text"
              placeholder="License Plate"
              value={carToEdit?.licensePlate || ""}
              onChange={(e) => setCarToEdit({ ...carToEdit, licensePlate: e.target.value })}
              className="border p-2 mb-2 w-full"
            />
            <Select
              placeholder="Select Status"
              value={carToEdit?.status || ""}
              onChange={(value) => setCarToEdit({ ...carToEdit, status: value })}
              className="mb-2 w-full h-[39px]"
            >
              <Select.Option value="AVAILABLE">AVAILABLE</Select.Option>
              <Select.Option value="RENTED">RENTED</Select.Option>
              <Select.Option value="MAINTENANCE">MAINTENANCE</Select.Option>
            </Select>
            <button onClick={handleEditCar} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
            <button onClick={() => setIsEditModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Cancel</button>
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
            <div>Edit</div>
            <div>Delete</div>
          </div>

          {loading && <div>Loading...</div>}
          {/* Details */}
          {cars.length > 0 ? (
            cars.map((car) => (
              <div key={car.id} className="grid grid-cols-5 px-4 py-3 items-center hover:bg-gray-50">
                <div className="text-gray-900">{car.categoryName}</div>
                <div className="text-gray-900">{car.licensePlate}</div>
                <div className="text-gray-900">{car.status}</div>
                <div>
                  <button className="px-6 py-1 bg-blue-600 text-white rounded-md text-sm " onClick={() => handleCarEditClick(car)}>
                    Edit
                  </button>
                </div>
                <div>
                  <button className="px-6 py-1 bg-red-600 text-white rounded-md text-sm" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this car?")) {
                      // console.log(car.id)
                      // handleDeleteCar(car.id);
                    }
                  }}> 
                    Delete
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
