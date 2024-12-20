import { CarCard, CarCardProps } from "./CarCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchCarCategoriesBasic } from "../../store/CarCategory/carCategoryActions";

const CarList = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch<AppDispatch>();

  const carCategories = useSelector(
    (state: RootState) => state.carCategoryBasic.carCategories
  );

  useEffect(() => {
    if (!carCategories.length) dispatch(fetchCarCategoriesBasic());
  }, [carCategories.length, dispatch]);

  const filteredCars = carCategories.filter((car) => {
    const matchesType =
      filters.types.length === 0 || filters.types.includes(car.type);
    const matchesCapacity =
      filters.numberOfPerson.length === 0 ||
      filters.numberOfPerson.includes(String(car.numberOfPerson)) ||
      (filters.numberOfPerson.includes("9 or More") && car.numberOfPerson >= 9);
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
