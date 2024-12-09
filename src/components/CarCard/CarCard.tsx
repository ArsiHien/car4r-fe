import { useState } from "react";
import { Link } from "react-router-dom";

export interface CarDetail {
  car: string;
  number: string;
  status: "In Gara" | "Rented" | "Maintenance";
}

export interface Car {
  id: string;
  name: string;
  model: string;
  imageUrl: string;
  details: CarDetail[];
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200">
      {/* Main Card */}
      <div
        className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-24 h-16 object-contain"
        />
        <div>
          <h3 className="font-medium text-gray-900">{car.name}</h3>
          <p className="text-sm text-gray-500">{car.model}</p>
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
          {car.details.map((detail, index) => (
            <div
              key={index}
              className="grid grid-cols-5 px-4 py-3 items-center hover:bg-gray-50"
            >
              <div className="text-gray-900">{detail.car}</div>
              <div className="text-gray-900">{detail.number}</div>
              <div className="text-gray-900">{detail.status}</div>
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
