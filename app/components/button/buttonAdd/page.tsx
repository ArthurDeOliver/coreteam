"use client";
import { FaCirclePlus } from "react-icons/fa6";

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonAdd = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-2 
      bg-primary-color-500 
      hover:bg-primary-color-600 
      active:bg-primary-color-400 
      text-white transition-all rounded-md
      flex items-center justify-center gap-2"
    >
      <FaCirclePlus className="text-xl" />
      {text}
    </button>
  );
};
