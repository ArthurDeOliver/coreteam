"use client";

interface ButtonCancelProps {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  enabled?: boolean;
}

export const ButtonCancel = ({
  text,
  onClick,
  enabled,
  type,
}: ButtonCancelProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!enabled}
      className="underline w-full px-4 py-2 transition-all rounded-md hover:bg-cancel-color-600 active:bg-cancel-color-500 disabled:bg-transparent  disabled:text-gray-500"
    >
      {text}
    </button>
  );
};
