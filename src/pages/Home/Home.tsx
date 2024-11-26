import CarAds from "../../components/Cars/CarAds";
import car from "../../assets/Car.png";
import BookingForm from "../../components/BookingFrom";
import HomeSectionHeader from "../../components/HomeSectionHeader";
import CarListHorizontal from "../../components/Cars/CarListHorizontal";

const Home = () => {
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
        <HomeSectionHeader title="Popular Car"></HomeSectionHeader>
        <CarListHorizontal sliderId="popular-slider"></CarListHorizontal>
      </div>
      <div>
        <HomeSectionHeader title="Recomendation Car"></HomeSectionHeader>
        <CarListHorizontal sliderId="recomendation-slider"></CarListHorizontal>
      </div>
    </>
  );
};

export default Home;
