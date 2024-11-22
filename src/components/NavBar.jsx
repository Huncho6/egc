import React, { useState } from "react";
import {
  FaBars,
  FaDiscord,
  FaFacebook,
  FaTelegram,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`relative bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 h-48 md:clip-path-[polygon(0%_0%,_100%_0%,_100%_80%,_100%_90%,_40%_95%,_10%_100%,_0%_100%)] md:h-48`}
    >
      {/* Social Media Icons */}
      <div className="absolute top-2 left-0 right-0 flex justify-center space-x-4 md:right-4 md:top-2 md:justify-end">
        <a href="#">
          <FaFacebook className="text-white h-6 w-6" />
        </a>
        <a
          href="https://x.com/evergrowmod?s=21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-white h-6 w-6" />
        </a>
        <a href="#">
          <FaYoutube className="text-white h-6 w-6" />
        </a>
        <a href="#">
          <FaTelegram className="text-white h-6 w-6" />
        </a>
        <a href="#">
          <FaDiscord className="text-white h-6 w-6" />
        </a>
      </div>

      {/* Logo and Navigation */}
      <div className="px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1731855406/cropped-EGC-logo-mid_w1u6el.webp"
            alt="Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } p-4 md:static md:flex md:space-x-8 md:bg-transparent absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 md:h-auto h-full md:flex-row flex-col items-center justify-center space-y-4`}
        >
          <Link
            to="newtoken"
            className="text-xl font-extrabold text-white hover:underline py-2"
            onClick={toggleSidebar} // Close sidebar on mobile after navigation
          >
            New Token Allocation
          </Link>
          <Link
            to="staking"
            className="text-xl font-extrabold text-white hover:underline py-2"
            onClick={toggleSidebar} // Close sidebar on mobile after navigation
          >
            Staking Claim
          </Link>
        </div>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="flex md:hidden relative">
        <div
          className="fixed top-16 right-8 md:hidden"
          style={{ zIndex: 1000 }}
        >
          <button
            onClick={toggleSidebar}
            className="text-3xl absolute z-20 top-0 right-0"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar (Mobile) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center"
            onClick={toggleSidebar}
          >
            <div className="bg-white w-64 p-6 rounded-lg">
              <Link
                to="newtoken"
                className="block text-xl font-extrabold text-purple-500 hover:underline py-2"
                onClick={toggleSidebar}
              >
                New Token Allocation
              </Link>
              <Link
                to="staking"
                className="block text-xl font-extrabold text-purple-500 hover:underline py-2"
                onClick={toggleSidebar}
              >
                Staking Claim
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
