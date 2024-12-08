import { useParams } from "react-router-dom";
import CarImage from "../../components/Cars/CarImage";
import CarDetailCard from "../../components/Cars/CarDetailCard";
import ReviewSection from "../../components/Review/ReviewSection";
import CarListHorizontal from "../../components/Cars/CarListHorizontal";
import CarSectionHeader from "../../components/CarSectionHeader";
import { useEffect, useState } from "react";
import axios from "axios";

interface CarImageResponse {
  id: string;
  imageUrl: string;
}

interface AmenityResponse {
  id: string;
  name: string;
}

interface CarCategoryDetailResponse {
  id: string;
  name: string;
  type: string;
  description: string;
  numberOfPerson: number;
  steering: string;
  gasoline: number;
  price: number;
  promotionPrice: number;
  mainImage: string;
  carImages: CarImageResponse[];
  amenities: AmenityResponse[];
}

const CarDetail = () => {
  const [carDetails, setCarDetails] =
    useState<CarCategoryDetailResponse | null>(null);
  const { carId } = useParams<{ carId: string }>();
  const carData = {
    carName: "Toyota Camry",
    carType: "Sport",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis, laudantium recusandae repellendus excepturi vero ea consequuntur, ratione asperiores odio assumenda corrupti nihil. Quia vel, aliquam sunt tempora architecto laboriosam.",
    capacity: 5,
    steering: "Manual",
    fuel: 70,
    price: 80.0,
    promotionPrice: 100.0,
    rating: 4.5,
    reviewersCount: 440,
    amenities: ["Map", "Bluetooth", "GPS Navigation", "USB Port"],
  };

  useEffect(() => {
    const fetchCarDetail = async () => {
      if (carId) {
        const id = carId.split("-").slice(1).join("-");
        try {
          const response = await axios.get<CarCategoryDetailResponse>(
            `http://localhost:8080/api/car-category/${id}`
          );
          setCarDetails(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchCarDetail();
  }, [carId]);

  if (!carDetails) {
    return <p>Loading...</p>;
  }

  const amenityNames =
    carDetails.amenities?.map((amenity) => amenity.name) || [];
  return (
    <div>
      <div className="grid grid-cols-2 pb-8">
        <CarImage />
        <CarDetailCard
          name={carDetails.name}
          type={carDetails.type}
          description={carDetails.description}
          numberOfPerson={carDetails.numberOfPerson}
          steering={carDetails.steering}
          gasoline={carDetails.gasoline}
          price={carDetails.price}
          promotionPrice={carDetails.promotionPrice}
          rating={4.5}
          reviewersCount={123}
          amenities={amenityNames}
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
