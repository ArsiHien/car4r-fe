import { CarCard, CarCardProps } from "./CarCard";
import cars from "../../data/cars";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CarList = () => {
  const filters = useSelector((state: RootState) => state.filters);

  const filteredCars = cars.filter((car) => {
    const matchesType =
      filters.types.length === 0 || filters.types.includes(car.carType);
    const matchesCapacity =
      filters.capacities.length === 0 ||
      filters.capacities.includes(String(car.capacity + " Person"));
    const matchesPrice = car.newPrice
      ? car.newPrice <= filters.maxPrice
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
            carName={car.carName}
            carType={car.carType}
            carImg={car.carImg}
            fuel={car.fuel}
            transmission={car.transmission}
            capacity={car.capacity}
            newPrice={car.newPrice}
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
