import { CarCard, CarCardProps } from "./CarCard";
import cars from "../../data/cars";

const CarList = () => {
  return (
    <div className="mt-24 grid grid-cols-1 gap-6 pl-72 pr-4 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map((car: CarCardProps, index: number) => (
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
        ></CarCard>
      ))}
    </div>
  );
};

export default CarList;
