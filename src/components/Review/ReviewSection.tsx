import React, { useState } from "react";
import ReviewHeader from "./ReviewHeader";
import ReviewList from "./ReviewList";
import ShowMoreButton from "./ShowMoreButton";

const ReviewSection: React.FC = () => {
  const reviews = [
    {
      name: "Alex Stanton",
      profilePic: "https://i.pravatar.cc/300",
      review:
        "We are very happy with the service from the CAR4R App. CAR4R has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      date: "21 July 2022",
      rating: 4,
    },
    {
      name: "Skylar Dias",
      profilePic: "https://i.pravatar.cc/300",
      review:
        "We are greatly helped by the services of the CAR4R Application. CAR4R has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      date: "20 July 2022",
      rating: 4,
    },
    {
      name: "John Doe",
      profilePic: "https://i.pravatar.cc/300",
      review:
        "The CAR4R App is amazing. I could rent a car quickly and easily. Prices are affordable, and the service is top-notch!",
      date: "19 July 2022",
      rating: 5,
    },
    {
      name: "Jane Smith",
      profilePic: "https://i.pravatar.cc/300",
      review:
        "CAR4R is super convenient! The variety of cars and the affordable prices make it my go-to rental service.",
      date: "18 July 2022",
      rating: 5,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => setShowAll((prev) => !prev);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <ReviewHeader totalReviews={reviews.length} />
      <ReviewList reviews={displayedReviews} />
      {reviews.length > 3 && (
        <ShowMoreButton showAll={showAll} onClick={handleShowAll} />
      )}
    </div>
  );
};

export default ReviewSection;
