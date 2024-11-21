import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Filter = ({ onFilter }) => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setName(value);
    onFilter({ name: value }); // Trigger filtering on input change
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search Wallet"
        value={name}
        onChange={handleInputChange}
        className="p-2 pl-10 text-gray-200 rounded-3xl w-full h-12 sm:w-[300px] lg:w-[600px] bg-neutral-800 placeholder-gray-500"
      />
      {/* Search Icon */}
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <CiSearch size={20} />
      </span>
    </div>
  );
};

export default Filter;
