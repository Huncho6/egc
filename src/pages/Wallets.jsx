import React, { useState, useEffect } from "react";
import { walletData } from "../utils/walletData";
import Filter from "./Filter";
import PreModal from "./PreModal";
import Modal from "./Modal";
import { ClipLoader } from "react-spinners";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const Wallets = () => {
  const [wallets, setWallets] = useState([]);
  const [filteredWallets, setFilteredWallets] = useState([]);
  const [showPreWalletModal, setShowPreWalletModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [showPreModal, setShowPreModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(true);

  // Simulate wallet data fetching
  const fetchData = async () => {
    try {
      const res = walletData;
      setWallets(res);
      setFilteredWallets(res); // Initialize filtered wallets
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const closePreWalletModal = () => {
    setShowPreWalletModal(false);
  };

  const openWalletModal = () => {
    setShowPreWalletModal(false);
    setShowWalletModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const closeWalletModal = () => {
    setShowWalletModal(false);
  };

  const handleFilter = ({ name }) => {
    const filtered = wallets.filter((wallet) =>
      wallet.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredWallets(filtered);
  };

  const openPreModal = (wallet) => {
    setSelectedWallet(wallet);
    setShowPreModal(true);

    setLoadingModal(true);
    setTimeout(() => {
      setLoadingModal(false);
    }, 7000);
  };

  const closePreModal = () => {
    setSelectedWallet(null);
    setShowPreModal(false);
    setLoadingModal(true);
  };

  const proceedToModal = () => {
    setShowPreModal(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBackToPreWalletModal = () => {
    setShowWalletModal(false);
    setShowPreWalletModal(true);
  };

  return (
    <div className="mx-auto px-4 py-8 bg-black">
      {/* Pre-Wallet Modal */}
      {showPreWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-end z-50">
          <div className="bg-black w-full max-w-md p-6 rounded-t-3xl shadow-xl sm:max-w-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold text-white">
                <FaRegQuestionCircle />
              </span>
              <h2 className="text-white font-extrabold text-lg sm:text-xl">
                Connect Wallet
              </h2>
              <button
                onClick={closePreWalletModal}
                className="text-gray-400 hover:text-gray-300 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            {/* Wallet List */}
            <ul className="space-y-4">
              {wallets.slice(0, 3).map((wallet, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition"
                >
                  <div className="flex items-center">
                    <img
                      src={wallet.image}
                      alt={wallet.name}
                      className="w-8 h-8 rounded-full mr-4"
                    />
                    <span className="text-white font-medium">
                      {wallet.name}
                    </span>
                  </div>
                </li>
              ))}

              {/* All Wallets Option */}
              <li
                className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition cursor-pointer"
                onClick={openWalletModal}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">+</span>
                  </div>
                  <span className="text-white font-medium">All Wallets</span>
                </div>
                <span className="text-gray-400 font-medium text-sm">260+</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Full Wallet Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-end z-50">
          <div className="bg-neutral-950 w-full max-w-lg p-6 rounded-t-3xl shadow-lg sm:w-[500px] max-h-[80vh] overflow-y-auto scrollbar-hide">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span
                onClick={handleBackToPreWalletModal}
                className="text-2xl font-bold text-white cursor-pointer"
              >
                <IoIosArrowBack />
              </span>
              <h2 className="text-white font-bold text-lg sm:text-xl">
                All Wallets
              </h2>
              <button
                onClick={closeWalletModal}
                className="text-gray-400 hover:text-gray-300 text-xl font-bold"
              >
                &times;
              </button>
            </div>

            {/* Search Bar */}
            <Filter onFilter={handleFilter} />

            {/* Wallet List */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-6">
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-neutral-800 p-4 rounded-lg animate-pulse"
                    >
                      <div className="w-12 h-12 bg-neutral-800 rounded-full mb-2"></div>
                      <div className="w-3/4 h-4 bg-neutral-800 rounded"></div>
                    </div>
                  ))
                : filteredWallets.map((wallet, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800 transition cursor-pointer"
                      onClick={() => openPreModal(wallet)}
                    >
                      <img
                        src={wallet.image}
                        alt={wallet.name}
                        className="w-12 h-12 mb-2"
                      />
                      <span className="text-white text-sm text-center">
                        {wallet.name}
                      </span>
                    </div>
                  ))}
              {showPreModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  {loadingModal ? (
                    <ClipLoader color="#4A90E2" size={50} />
                  ) : (
                    <PreModal
                      wallet={selectedWallet}
                      closeModal={closePreModal}
                      proceedToModal={proceedToModal}
                    />
                  )}
                </div>
              )}

              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <Modal wallet={selectedWallet} closeModal={closeModal} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallets;
