"use client";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  enabled: boolean;
}

export const InputComponent = ({
  label,
  name,
  placeholder,
  type,
  onChange,
  value,
  enabled,
}: InputProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={name} className="text-sm pt-2">
        {label}
      </label>
      <input
        required
        id={name}
        name={name}
        className="px-3 py-2 rounded-md outline-none text-black focus:outline-orange-500 disabled:bg-font-primary-400"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={!enabled}
      />
    </div>
  );
};
