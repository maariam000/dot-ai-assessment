"use client";
import React, { useState } from "react";
import { IDropdownProps } from "../interface";

const Dropdown: React.FC<IDropdownProps> = ({
  label,
  options,
  value,
  extraStyles,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(label);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (onChange) onChange(selectedValue); 
  };

  return (
    <div className={`${extraStyles}`}>
      <p className="text-sm font-semibold text-secondaryColor pl-1 pb-1.5">{label}</p>
      <select
        className="w-full border bg-white p-3 text-sm outline-none rounded-xl text-gray-800 cursor-pointer"
        value={value}
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
