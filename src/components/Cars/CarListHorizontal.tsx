import { useEffect, useState } from "react";
import { CarCard, CarCardProps } from "./CarCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios";
const CarListHorizontal = ({ sliderId }: { sliderId: string }) => {
  const [cars, setCars] = useState<CarCardProps[]>([]);
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

  return (
    <div className="relative flex items-center ">
      <LeftOutlined onClick={slideLeft} className="text-2xl" />
      <div
        id={sliderId}
        className="flex items-center w-full h-[420px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
      >
        {cars.map((car: CarCardProps, index: number) => (
          <div
            key={index}
            className="min-w-96 inline-block mx-4 ease-in-out duration-300"
          >
            <CarCard
              name={car.name}
              type={car.type}
              mainImage={car.mainImage}
              gasoline={car.gasoline}
              steering={car.steering}
              numberOfPerson={car.numberOfPerson}
              promotionPrice={car.promotionPrice}
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
