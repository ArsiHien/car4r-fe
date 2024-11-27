import { Rate } from "antd";

export type ReviewCardProps = {
  name: string;
  profilePic: string;
  review: string;
  date: string;
  rating: number;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  profilePic,
  review,
  date,
  rating,
}) => {
  return (
    <div className="flex items-start gap-4 border-b border-gray-200 pb-4">
      <img
        src={profilePic}
        alt={`${name}'s profile`}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className="text-sm text-gray-500">{date}</span>
            <Rate allowHalf disabled defaultValue={rating} />
          </div>
        </div>
        <p className="mt-2 text-gray-700">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
