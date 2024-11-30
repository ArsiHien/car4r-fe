import { useParams } from "react-router-dom";
import CarImage from "../../components/Cars/CarImage";
import CarDetailCard from "../../components/Cars/CarDetailCard";
import ReviewSection from "../../components/Review/ReviewSection";
import CarListHorizontal from "../../components/Cars/CarListHorizontal";
import CarSectionHeader from "../../components/CarSectionHeader";
import { useEffect } from "react";

const CarDetail = () => {
  const { carName } = useParams<{ carName: string }>();
  const carData = {
    carName: carName || "Toyota Camry",
    carType: "Sport",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis, laudantium recusandae repellendus excepturi vero ea consequuntur, ratione asperiores odio assumenda corrupti nihil. Quia vel, aliquam sunt tempora architecto laboriosam.",
    capacity: 5,
    steering: "Manual",
    fuel: 70,
    price: 80.0,
    newPrice: 100.0,
    rating: 4.5,
    reviewersCount: 440,
    amenities: ["Map", "Bluetooth", "GPS Navigation", "USB Port"],
  };

  useEffect(() => {
    const duration = 300;
    const startPosition = window.scrollY;
    const distance = -startPosition;
    const startTime = performance.now();
  
    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const position = startPosition + distance * progress;
      window.scrollTo(0, position);
  
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };
  
    requestAnimationFrame(scroll);
  }, [carName]);
  
  

  return (
    <div>
      <div className="grid grid-cols-2 pb-8">
        <CarImage />
        <CarDetailCard
          carName={carData.carName}
          carType={carData.carType}
          description={carData.description}
          capacity={carData.capacity}
          steering={carData.steering}
          fuel={carData.fuel}
          price={carData.price}
          newPrice={carData.newPrice}
          rating={carData.rating}
          reviewersCount={carData.reviewersCount}
          amenities={carData.amenities}
        />
      </div>
      <ReviewSection></ReviewSection>
      <div className="mt-12">
        <CarSectionHeader title="Similar Car"></CarSectionHeader>
        <CarListHorizontal sliderId="iimilar-slider"></CarListHorizontal>
      </div>
    </div>
  );
};

export default CarDetail;
