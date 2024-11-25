// ... existing imports ...
import { Link } from "react-router-dom";
const RentalDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Details Rental Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">Details Rental</h2>

          {/* Map Section */}
          <div className="bg-gray-100 h-64 rounded-lg mb-6"></div>

          {/* Car Details */}
          <div className="flex items-center mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Car"
              className="h-16 w-24 mr-4 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">Nissan GT - R</h3>
              <p className="text-gray-500">Sport Car</p>
            </div>
          </div>

          {/* Pick-Up Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h4 className="font-semibold">Pick - Up</h4>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <label className="text-sm text-gray-500">Locations</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>Kota Semarang</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-sm text-gray-500">Date</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>20 July 2022</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-sm text-gray-500">Time</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>07:00</option>
                </select>
              </div>
            </div>
          </div>

          {/* Drop-Off Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 border-2 border-blue-500 rounded-full"></div>
              <h4 className="font-semibold">Drop - Off</h4>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <label className="text-sm text-gray-500">Locations</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>Kota Semarang</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-sm text-gray-500">Date</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>21 July 2022</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-sm text-gray-500">Time</label>
                <select className="w-full mt-1 p-2 border rounded-lg">
                  <option>01:00</option>
                </select>
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Rental Price</p>
              <p className="text-sm text-gray-400">
                Overall price and includes rental discount
              </p>
            </div>
            <p className="text-2xl font-bold">$80.00</p>
          </div>
        </div>
              
        {/* Recent Transactions Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Transaction</h2>
            <button className="text-blue-500 text-sm">
              <Link to="/management/cars">View All</Link>
            </button>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Nissan GT - R",
                date: "20 July",
                price: "$80.00",
                type: "Sport Car",
              },
              {
                name: "Koenigsegg",
                date: "19 July",
                price: "$99.00",
                type: "Sport Car",
              },
              {
                name: "Rolls - Royce",
                date: "18 July",
                price: "$96.00",
                type: "Sport Car",
              },
              { name: "CR - V", date: "17 July", price: "$80.00", type: "SUV" },
            ].map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg"
              >
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Car"
                    className="h-12 w-20 mr-4 rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{transaction.name}</h3>
                    <p className="text-sm text-gray-500">{transaction.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                  <p className="font-bold">{transaction.price}</p>
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
