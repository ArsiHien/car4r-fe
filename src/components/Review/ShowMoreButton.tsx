import { FaAngleDown, FaAngleUp } from "react-icons/fa";
type ShowMoreButtonProps = {
  showAll: boolean;
  onClick: () => void;
};

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  showAll,
  onClick,
}) => {
  return (
    <div className="flex justify-center items-center mt-6">
      <button
        className="text-blue-500 text-sm font-medium flex items-center space-x-1"
        onClick={onClick}
      >
        <span>{showAll ? "Show Less" : "Show All"}</span>
        <span className="text-lg">
          {showAll ? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </button>
    </div>
  );
};

export default ShowMoreButton;
