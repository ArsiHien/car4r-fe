type ReviewHeaderProps = {
  totalReviews: number;
};

const ReviewHeader: React.FC<ReviewHeaderProps> = ({ totalReviews }) => {
  return (
    <div className="flex gap-4 items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Reviews</h2>
      <span className="bg-[#3563E9] text-white text-sm font-medium px-3 py-1 rounded-lg">
        {totalReviews}
      </span>
    </div>
  );
};

export default ReviewHeader;
