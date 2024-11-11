// src/components/RentalDetails.tsx
import React from "react";

const RentalDetails: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-lg">
        
        {/* Details Rental Section */}
        <div className="p-6 border-r">
          <h2 className="text-xl font-bold mb-4">Details Rental</h2>
          <div className="bg-gray-200 h-48 rounded mb-4"></div>
          
          <div className="flex items-center mb-2">
            <img src="https://via.placeholder.com/100" alt="Car" className="h-16 w-24 mr-4 rounded-lg"/>
            <div>
              <h3 className="text-lg font-semibold">Nissan GT - R</h3>
              <p className="text-gray-500">Sport Car</p>
            </div>
          </div>

          <div className="mb-2">
            <h4 className="font-semibold text-gray-700">Pick-Up</h4>
            <p>Location: <span className="text-gray-500">Kota Semarang</span></p>
            <p>Date: <span className="text-gray-500">20 July 2022</span></p>
            <p>Time: <span className="text-gray-500">07:00</span></p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Drop-Off</h4>
            <p>Location: <span className="text-gray-500">Kota Semarang</span></p>
            <p>Date: <span className="text-gray-500">21 July 2022</span></p>
            <p>Time: <span className="text-gray-500">01:00</span></p>
          </div>

          <div className="text-right">
            <p className="text-lg font-semibold">Total Rental Price</p>
            <p className="text-2xl font-bold text-blue-600">$80.00</p>
          </div>
        </div>
        
        {/* Recent Transactions Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Transaction</h2>
          <div className="space-y-4">
            
            {[
              { name: "Nissan GT - R", date: "20 July", price: "$80.00", type: "Sport Car" },
              { name: "Koenigsegg", date: "19 July", price: "$99.00", type: "Sport Car" },
              { name: "Rolls - Royce", date: "18 July", price: "$96.00", type: "Sport Car" },
              { name: "CR - V", date: "17 July", price: "$80.00", type: "SUV" },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/80" alt="Car" className="h-12 w-20 mr-4 rounded-lg"/>
                  <div>
                    <h3 className="text-lg font-semibold">{transaction.name}</h3>
                    <p className="text-gray-500">{transaction.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                  <p className="text-lg font-bold">{transaction.price}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
