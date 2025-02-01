"use client";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  enabled: boolean;
  maxLength: number;
}

export const InputComponent = ({
  label,
  name,
  placeholder,
  type,
  onChange,
  value,
  enabled,
  maxLength,
}: InputProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        maxLength={maxLength}
        required
        id={name}
        name={name}
        className={`px-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-gray-900 ${
          !enabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"
        }`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={!enabled}
      />
    </div>
  );
};
