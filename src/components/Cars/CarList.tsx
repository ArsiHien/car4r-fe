import { CarCard, CarCardProps } from "./CarCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";

const CarList = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const [cars, setCars] = useState<CarCardProps[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get<CarCardProps[]>(
          "http://localhost:8080/api/car-category/basic"
        );
        setCars(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesType =
      filters.types.length === 0 || filters.types.includes(car.type);
    const matchesCapacity =
      filters.capacities.length === 0 ||
      filters.capacities.includes(String(car.numberOfPerson)) ||
      (filters.capacities.includes("9 or More") && car.numberOfPerson >= 9);
    const matchesPrice = car.promotionPrice
      ? car.promotionPrice <= filters.maxPrice
      : car.price <= filters.maxPrice;

    return matchesType && matchesCapacity && matchesPrice;
  });

  const hasCars = filteredCars.length > 0;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {hasCars ? (
        filteredCars.map((car: CarCardProps, index: number) => (
          <CarCard
            key={index}
            id={car.id}
            name={car.name}
            type={car.type}
            mainImage={car.mainImage}
            gasoline={car.gasoline}
            steering={car.steering}
            numberOfPerson={car.numberOfPerson}
            promotionPrice={car.promotionPrice}
            price={car.price}
          />
        ))
      ) : (
        <div className="text-center font-semibold text-2xl text-gray-500">
          <p>No cars match your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CarList;