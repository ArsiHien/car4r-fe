import { useState } from "react";
import { Header, Footer } from "../../components";
import ManagerSideBar from "../../components/SideBar/ManagerSideBar";
import StaffList from "../../components/StaffList";

const StaffMag = () => {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <ManagerSideBar />
        <div className="flex-1 p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">All Cars</h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Add Staff
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <StaffList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaffMag;
