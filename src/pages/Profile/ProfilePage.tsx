import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/100", // Default profile picture
  );

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result && typeof result === "string") {
          setProfilePicture(result); // Update the profile picture
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const triggerFileInput = () => {
    const fileInput = document.getElementById(
      "profilePictureInput",
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Container */}
      <div className="bg-white shadow-md rounded-md w-full max-w-4xl p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Profile Picture */}
          <div
            className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden cursor-pointer"
            onClick={triggerFileInput}
          >
            <img
              src={profilePicture}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">Mason Wilson</h1>
            <p className="text-gray-500">Admin</p>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          id="profilePictureInput"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="hidden"
        />

        {/* Profile Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
          <div className="space-y-4">
            {/* Profile Form */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Mason"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Wilson"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                defaultValue="masowilson123@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                defaultValue="+1 (555) 000-0000"
              />
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="**********"
              />
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="**********"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
