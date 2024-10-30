import React from "react";

const BookingForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-4 p-6 bg-gray-100">
      {/* Pick-Up Section */}
      <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="flex items-center space-x-2">
          <input type="radio" checked className="text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Pick-Up</h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Location Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Locations
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled selected>
                Select your city
              </option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>

          {/* Date Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Date
            </label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Time Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Time
            </label>
            <input
              type="time"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex items-center justify-center">
        <button className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700">
          {/* Swap Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v6h6M20 20v-6h-6M4 10l7-7m9 9l-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="flex items-center space-x-2">
          <input type="radio" className="text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Drop-Off</h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Location Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Locations
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled selected>
                Select your city
              </option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>

          {/* Date Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Date
            </label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Time Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Time
            </label>
            <input
              type="time"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
