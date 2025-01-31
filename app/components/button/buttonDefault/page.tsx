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
      bg-primary-color-500 
      hover:bg-primary-color-600 
      active:bg-primary-color-400 
      text-white transition-all rounded-md
      disabled:bg-gray-400
      flex items-center justify-center gap-2"
    >
      {text}
    </button>
  );
};
