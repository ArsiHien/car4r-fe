import RentailDetails from "../../components/RentailDetails/RentailDetails";
import { Header, Footer, StaffSidebar } from "../../components";

const StaffOverview = () => {
  return (
      <>
        <Header />
        <div className="flex w-full">
          <StaffSidebar />
          <div className="flex-1 flex justify-center">
            <RentailDetails />
          </div>
        </div>
        <Footer />
      </>
  );
};

export default StaffOverview;