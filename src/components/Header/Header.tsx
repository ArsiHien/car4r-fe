import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd"; // Add this import

import UserMenu from "../SideBar/UserMenu";
import SearchBar from "./SearchBar";

import { useSelector } from "react-redux"; // Add this import
import { RootState } from "../../store/store";
import avatar from "../../assets/avatar.png";

const Header: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => !!state.auth.accessToken); // Check if user is logged in
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user.user);

  const [profilePicture, setProfilePicture] = useState(
    user?.avatar || avatar,
  );

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-md">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold text-blue-600">CAR4R</div>
      </Link>

      {/* Search Bar */}
      <div className="relative flex items-center max-w-md w-full mx-4">
        <SearchBar></SearchBar>
      </div>

      {/* Icons and User Profile */}
      <div className="flex items-center space-x-6">
        {!isLoggedIn ? ( // Check if user is not logged in
          <>
            <Link to="/signup" className="text-blue-600">Sign Up</Link>
            <Link to="/login" className="text-blue-600">Log In</Link>
          </>
        ) : (
          <>
        
            {/* User Icon that triggers the sidebar */}
            <div className="relative">
              <img
                src= {profilePicture} // replace with actual profile image path
                alt="User Icon"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={toggleSidebar}
              />

              {/* Sidebar Component */}
              {isSidebarOpen && (
                <UserMenu onClose={() => setIsSidebarOpen(false)} />
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
