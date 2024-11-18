import AddCarForm from '../../components/AddCar/AddCarForm';
import { Header, Footer, StaffSidebar } from "../../components";

const AddCarPage = () => {
  return (
    <>
    <Header />
    <div className="flex w-full">
          <StaffSidebar />
    <div className="p-6 flex-1 ">
      <AddCarForm />
    </div>
    </div>
    <Footer />
    </>
  );
};

export default AddCarPage;