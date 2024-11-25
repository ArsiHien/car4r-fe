import React, { useState } from "react";
import { Header, Footer } from "../../components";

interface ProfileData {
  name: string;
  email: string;
  mobile: string;
  birthday: string;
}

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "your name",
    email: "yourname@gmail.com",
    mobile: "Add number",
    birthday: "01/01/1000",
  });

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Saving profile data:", profileData);
  };

  return (
    <div>
      <Header />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        {/* Header with avatar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="src\assets\avatar.png"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
            </div>
            <div>
              <p className="font-medium">{profileData.name}</p>
              <p className="text-sm text-gray-500">{profileData.email}</p>
            </div>
          </div>
          <button className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email account
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Mobile number
            </label>
            <input
              type="tel"
              value={profileData.mobile}
              onChange={(e) =>
                setProfileData({ ...profileData, mobile: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Birthday</label>
            <input
              type="text"
              value={profileData.birthday}
              onChange={(e) =>
                setProfileData({ ...profileData, birthday: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleSaveChanges}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Save Change
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
