import Image from "next/image";
import { IButtonProps } from "../interface";

const ThemeButton: React.FC<IButtonProps> = ({
  text,
  extraStyle,
  icon,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`${extraStyle} text-center rounded-md my-auto flex hover:cursor-pointer gap-2 px-[0.75rem] py-[0.5rem]  text-base font-medium text-white transition duration-200 hover:opacity-[0.9]`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="my-auto">{icon}</div>
      <p className="flex justify-between text-center">{text}</p>
    </button>
  );
};

export default ThemeButton;
