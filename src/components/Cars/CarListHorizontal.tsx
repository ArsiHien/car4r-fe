import carsData from "../../data/cars";
import { CarCard, CarCardProps } from "./CarCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const CarListHorizontal = ({ sliderId }: { sliderId: string }) => {
  const slideLeft = () => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollLeft += 500;
    }
  };

  return (
    <div className="relative flex items-center ">
      <LeftOutlined onClick={slideLeft} className="text-2xl" />
      <div
        id={sliderId}
        className="flex items-center w-full h-[420px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
      >
        {carsData.map((car: CarCardProps, index: number) => (
          <div
            key={index}
            className="min-w-96 inline-block mx-4 ease-in-out duration-300"
          >
            <CarCard
              carName={car.carName}
              carType={car.carType}
              carImg={car.carImg}
              fuel={car.fuel}
              transmission={car.transmission}
              capacity={car.capacity}
              newPrice={car.newPrice}
              price={car.price}
            ></CarCard>
          </div>
        ))}
      </div>
      <RightOutlined onClick={slideRight} className="text-2xl" />
    </div>
  );
};

export default CarListHorizontal;
