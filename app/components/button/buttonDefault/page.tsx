"use client";
interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  enable?: boolean | 0;
  type?: "submit" | "reset" | "button" | undefined;
}

export const ButtonDefault = ({ text, onClick, enable, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!enable}
      className="w-full px-4 py-2 
      bg-blue-600
      hover:bg-blue-700
      active:bg-blue-500
      disabled:bg-gray-400
      text-white transition-all rounded-md

      flex items-center justify-center gap-2"
    >
      {text}
    </button>
  );
};
