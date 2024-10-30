import React from "react";
import { useNavigate } from "react-router-dom";
import CarAds from "../../components/Cars/CarAds";
import car from "../../assets/Car.png";
import BookingForm from "../../components/BookingFrom";
import CarList from "../../components/Cars/CarList";
import config from "../../config";

const Home = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = config.routes.search;
    navigate(path);
  };
  return (
    <>
      <div className="mt-8 m-16 flex justify-between gap-5">
        <div className="w-[640px] h-[320px]">
          <CarAds
            title="The Best Platform for Car Rental"
            description="Ease of doing a car rental safely and reliably. Of course at a low price."
            carImg={car}
            color="54A6FF"
          ></CarAds>
        </div>
        <div className="w-[640px] h-[320px]">
          <CarAds
            title="The Best Platform for Car Rental"
            description="Ease of doing a car rental safely and reliably. Of course at a low price."
            carImg={car}
            color="54A6FF"
          ></CarAds>
        </div>
      </div>
      <BookingForm></BookingForm>
      <div>
        <div className="flex justify-between">
          <h1>Popolar Car</h1>
          <button onClick={routeChange}>View all</button>
        </div>
        <CarList></CarList>
      </div>
    </>
  );
};

export default Home;
