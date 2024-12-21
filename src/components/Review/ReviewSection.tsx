import React, { useState } from "react";
import ReviewHeader from "./ReviewHeader";
import ReviewList from "./ReviewList";
import ShowMoreButton from "./ShowMoreButton";
import { ReviewResponse } from "../../types/Review";

interface ReviewSectionProps {
  reviews: ReviewResponse[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => setShowAll((prev) => !prev);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  const transformedReviews = displayedReviews.map((review) => ({
    name: review.customerName,
    profilePic: "https://picsum.photos/500",
    review: review.review,
    date: review.reviewDate,
    rating: review.rating,
  }));

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <ReviewHeader totalReviews={reviews.length} />
      <ReviewList reviews={transformedReviews} />
      {reviews.length > 3 && (
        <ShowMoreButton showAll={showAll} onClick={handleShowAll} />
      )}
    </div>
  );
};

export default ReviewSection;
