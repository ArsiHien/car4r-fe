import StaffList from "../../components/StaffList";
import { useState } from "react";


const StaffManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleAddStaff = () => {
    // Logic to handle adding staff can be implemented here
    setIsModalOpen(false); // Close modal after adding staff
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">All Cars</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md" onClick={() => setIsModalOpen(true)}>
          Add Staff
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <StaffList />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md w-1/2"> {/* Increased padding and width */}
            <h2 className="text-xl font-semibold mb-4">Add Staff</h2>
            <form onSubmit={handleAddStaff}>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input type="text" className="border rounded-md w-full p-2" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Password</label>
                <input type="password" className="border rounded-md w-full p-2" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input type="email" className="border rounded-md w-full p-2" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone</label>
                <input type="tel" className="border rounded-md w-full p-2" required />
              </div>
              <div className="flex justify-end">
                <button type="button" className="mr-2 px-4 py-2 bg-gray-300 rounded-md" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Add Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffManagement;
