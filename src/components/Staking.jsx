import React from "react";
import { CiWallet } from "react-icons/ci";
import {  useNavigate } from "react-router-dom";

const Staking = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="w-full max-w-2xl sm:max-w-lg lg:max-w-3xl rounded-lg shadow-2xl bg-white">
        <div className="w-full px-4 py-6">
          <div className="flex justify-between items-center bg-white p-4 rounded-lg gap-5">
            <span className="text-lg sm:text-lg font-normal text-purple-600 sm:text-left">
              Claim from Staking
            </span>
            <button className="bg-purple-500 hover:bg-purple-600 text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex">
              <CiWallet
                color="black"
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
              />
              <span onClick={() => navigate("/wallets")} className="text-sm sm:text-base">Connect Wallet</span>
            </button>
          </div>
        </div>

        {/* Staking Card */}
        <div className="w-full px-4 py-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg text-white">
            {/* Logo */}
            <div className="flex mb-6">
              <img
                src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1731876981/egc_logo_lccu2m.webp"
                alt="EGC Logo"
                className="h-10 sm:h-12"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 mt-8">
              <div className="sm:text-left">
                <p className="text-lg sm:text-xl font-bold text-purple-950">
                  Total EGC Staked:
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  238,958,116,105,795
                </p>
              </div>
              <div className="sm:text-left">
                <p className="text-base sm:text-lg font-semibold">
                  My EGC Staked:
                </p>
                <p className="text-gray-200 font-bold text-lg sm:text-2xl italic">
                  Connect your wallet...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
