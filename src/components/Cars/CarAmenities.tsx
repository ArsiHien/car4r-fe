import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { carAmenities } from "../../data/carAmenitiesData";

type CarAmenitiesProps = {
  amenitiesName: string[];
};

const CarAmenities: React.FC<CarAmenitiesProps> = ({ amenitiesName }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {amenitiesName.map((amenity, index) => {
        const matchingAmenity = carAmenities.find(
          (item) => item.name === amenity
        );

        return (
          <div key={index} className="flex items-center space-x-2">
            {matchingAmenity ? (
              <>
                <matchingAmenity.icon className="text-blue-500 text-lg" />
                <span className="text-gray-800">{matchingAmenity.name}</span>
              </>
            ) : (
              <>
                <AiOutlineAppstoreAdd className="text-blue-500 text-lg"/>
                <span className="text-gray-800">{amenity}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CarAmenities;
