// Custom components
import React from "react";
import { InputFieldProps } from "../interface";

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    label,
    id,
    extraStyle,
    type,
    placeholder,
    state,
    onChange,
    value,
    name,
  } = props;

  return (
    <div className={`${extraStyle}`}>
      <label htmlFor={id} className={`text-sm font-semibold text-secondaryColor`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`mt-1.5 flex h-10 w-full items-center justify-center rounded-xl border-[1.5px] bg-white p-3 text-sm outline-none`}

        // ${
        //   state === "error"
        //     ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
        //     : state === "success"
        //     ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
        //     : "border-gray-200 dark:!border-white/10 dark:text-white"
        // }
      />
    </div>
  );
};

export default InputField;
