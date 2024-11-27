import ReviewCard, { ReviewCardProps } from "./ReviewCard";

type ReviewListProps = {
  reviews: ReviewCardProps[];
};

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
