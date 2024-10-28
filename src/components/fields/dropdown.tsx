"use client";
import React, { useState } from "react";
import { IDropdownProps } from "../interface";

const Dropdown: React.FC<IDropdownProps> = ({
  label,
  options,
  extraStyles,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(label);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (onChange) onChange(selectedValue); // Notify the parent component if `onChange` is provided
  };

  return (
    <div className={`${extraStyles}`}>
      <div className="text-sm font-semibold text-secondaryColor pb-1.5">{label}</div>
      <select
        className="border bg-white p-3 text-sm outline-none rounded-xl h-10 w-[80%] text-gray-800 cursor-pointer"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {/* <option disabled>Choose an Opto</option> */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
