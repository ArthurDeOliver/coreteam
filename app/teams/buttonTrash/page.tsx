"use client";

import { FaTrashAlt } from "react-icons/fa";

interface ButtonTrashProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  enabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

export const ButtonTrash = ({ enabled, onClick, type }: ButtonTrashProps) => {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      type={type}
      className="flex w-fit items-center gap-3 px-4 py-2 bg-cancel-color-700 text-white rounded-md hover:bg-cancel-color-800 transition-all"
    >
      <FaTrashAlt size={20} />
      <span>Excluir</span>
    </button>
  );
};
