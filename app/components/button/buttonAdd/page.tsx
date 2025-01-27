"use client";
import { FaCirclePlus } from "react-icons/fa6";

interface ButtonAddProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  enabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

export const ButtonAdd = ({ text, onClick, enabled, type }: ButtonAddProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!enabled}
      className="w-full px-4 py-2 
      bg-primary-color-500 
      hover:bg-primary-color-600 
      active:bg-primary-color-400 
      disabled:bg-gray-400
      text-white transition-all rounded-md
      flex items-center justify-center gap-2"
    >
      <FaCirclePlus className="text-xl" />
      {text}
    </button>
  );
};
