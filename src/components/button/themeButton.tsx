import Image from "next/image";
import { IButtonProps } from "../interface";

const ThemeButton: React.FC<IButtonProps> = ({
  text,
  extraStyle,
  icon,
  onClick,
}) => {
  return (
    <button
      className={`${extraStyle} rounded-md flex items-center gap-2 px-[0.75rem] py-[0.5rem]  text-base font-medium text-white transition duration-200 hover:opacity-[0.9]`}
      onClick={onClick}
    >
      <div>{icon}</div>
      <p className="flex justify-between text-center">{text}</p>
    </button>
  );
};

export default ThemeButton;
