import React from "react";
import { useNavigate } from "react-router-dom";

const NewToken = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg mb-5">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-purple-600">
            New Token
          </h1>
          <p className="text-lg sm:text-xl text-purple-600 font-extrabold">
            Future Allocation
          </p>
        </div>
        <button className="bg-purple-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-purple-700 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.75v14.5M19.25 12H4.75"
            />
          </svg>
          <span onClick={() => navigate("/wallets")} className="text-sm sm:text-base">Connect Wallet</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-6 sm:mt-8 border-l-4 border-purple-600 pl-4">
        <h2 className="text-base sm:text-xl font-normal text-gray-700">
          Future Allocation of New Token:
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-xl leading-relaxed">
          We are excited to announce that the EverGrow and Lucro tokens will be
          merging into a New Token! This dashboard has been created to help you
          verify how many New Tokens any wallet will receive upon launch. A
          snapshot of all holder data related to EGC, SEGC, and LCR was taken on
          September 4th 2024, at the time when trading was officially suspended
          and liquidity was withdrawn. Any tokens purchased after this point
          will not be included in the allocation of the New Token.
        </p>
        <p className="text-gray-400 mt-4 text-sm sm:text-xl leading-relaxed">
          Simply connect your wallet or enter any qualifying wallet address to
          view the projected future holdings and an estimated value of the
          tokens. The Projected Value figure is a projection only, and is not a
          guarantee of any future token value. It is pegged to the live price of
          SOL, the total value of the liquidity wallet, and changes
          continuously.
        </p>
        <p className="text-gray-400 mt-4 text-sm sm:text-xl leading-relaxed">
          New Token is a utility token and is not an offer to buy or sell any
          security in any country. It is intended for participation in the
          community ecosystem, including features such as community voting. New
          Token is not designed for investment, and there should be no
          expectation or implication of profit or returns.
        </p>
        <p className="text-gray-400 mt-4 text-sm sm:text-xl leading-relaxed">
          Please note, this dashboard is for informational purposes only.
        </p>
      </div>
    </div>
  );
};

export default NewToken;
