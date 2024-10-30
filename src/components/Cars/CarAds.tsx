import React from "react";

export interface CarAdsProps {
  title: string;
  description: string;
  carImg: string;
  color: string;
}

const CarAds: React.FC<CarAdsProps> = ({
  title,
  description,
  carImg,
  color,
}) => {
  return (
    <div className={`relative w-full h-full p-3 bg-[#${color}] `}>
      <div className="text-white w-72">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-4 text-xs">{description}</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Rental Car
        </button>
      </div>
      <img
        src={carImg}
        alt="Car"
        className="absolute m-auto left-0 right-0 bottom-5 w-1/2 h-auto"
      />
    </div>
  );
};

export default CarAds;
