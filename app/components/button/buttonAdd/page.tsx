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
      className="w-full h-full px-4 py-2 
      bg-blue-600
      hover:bg-blue-700
      active:bg-blue-500
      hover:scale-105
      disabled:bg-gray-400
      text-white transition-all rounded-md
      flex items-center justify-center gap-2"
    >
      <FaCirclePlus className="text-xl" />
      {text}
    </button>
  );
};
