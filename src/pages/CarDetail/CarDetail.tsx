import { useParams } from "react-router-dom";
import CarImage from "../../components/Cars/CarImage";
import CarDetailCard from "../../components/Cars/CarDetailCard";
import ReviewSection from "../../components/Review/ReviewSection";
import CarListHorizontal from "../../components/Cars/CarListHorizontal";
import CarSectionHeader from "../../components/CarSectionHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { CarCategoryDetail } from "../../types/CarCategoryDetail";

const CarDetail = () => {
  const [carDetails, setCarDetails] =
    useState<CarCategoryDetail | null>(null);
  const { carId } = useParams<{ carId: string }>();

  useEffect(() => {
    const fetchCarDetail = async () => {
      if (carId) {
        const id = carId.split("-").slice(1).join("-");
        try {
          const response = await axios.get<CarCategoryDetail>(
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

  return (
    <div>
      <div className="grid grid-cols-2 pb-8">
        <CarImage images={[carDetails.mainImage, ...carDetails.carImages.map(image => image.imageUrl)]}/>
        <CarDetailCard
          id={carDetails.id}
          mainImage={carDetails.mainImage}
          carImages={carDetails.carImages.map(image => ({ ...image, imageUrl: image.imageUrl }))}
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
          amenities={carDetails.amenities} reviews={[]}        />
      </div>
      <ReviewSection reviews={carDetails.reviews}></ReviewSection>
      <div className="mt-12">
        <CarSectionHeader title="Similar Car"></CarSectionHeader>
        <CarListHorizontal sliderId="iimilar-slider"></CarListHorizontal>
      </div>
    </div>
  );
};

export default CarDetail;
