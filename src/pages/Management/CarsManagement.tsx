import { useState } from "react";
import CarCard from "../../components/CarCard/CarCard";
import { Car } from "../../components/CarCard/CarCard";
import { Link, useLocation } from "react-router-dom";
import routes from "../../config/routes";
import { SoundTwoTone } from "@ant-design/icons";
const CarsManagement = () => {
  const location = useLocation();
  const [cars] = useState<Car[]>([
    {
      id: "1",
      name: "CR-V",
      model: "SUV",
      imageUrl: "/path-to-crv-image.png",
      details: [
        {
          car: "CR-V1",
          number: "OOA-12345",
          status: "In Gara",
        },
        {
          car: "CR-V1",
          number: "OOA-12346",
          status: "Rented",
        },
        {
          car: "CR-V1",
          number: "OOA-11111",
          status: "Maintenance",
        },
      ],
    },
    // Add more cars as needed
  ]);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">All Cars</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          <Link
            to={
              location.pathname.startsWith(routes.manager.cars)
                ? routes.manager.addCar
                : routes.staff.addCar
            }
          >
            Add Car
          </Link>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default CarsManagement;
