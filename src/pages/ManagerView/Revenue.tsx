import { Header, Footer } from "../../components";
import ManagerSideBar from "../../components/SideBar/ManagerSideBar";
import RevenueDetail from "../../components/Revenue/revenueDetail";

const Revenue = () => {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <ManagerSideBar />
        <div className="flex-1 p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Revenue</h1>
          </div>
          <RevenueDetail />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Revenue;
