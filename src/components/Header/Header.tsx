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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>

            <Link to="/settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Link>

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
