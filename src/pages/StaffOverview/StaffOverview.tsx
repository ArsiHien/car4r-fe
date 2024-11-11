import RentailDetails from "../../components/RentailDetails/RentailDetails";
import { Header, Footer, StaffSidebar } from "../../components";

const StaffOverview = () => {
    return (
        <>
          <Header />
          <div className="flex">
          <StaffSidebar />
          <RentailDetails />
          </div>
          <Footer />
        </>
      );
    };

export default StaffOverview;