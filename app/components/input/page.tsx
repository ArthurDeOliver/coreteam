"use client";

interface InputProps {
  placeholder: string;
  type: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  enabled: boolean;
}

export const InputComponent = ({
  label,
  placeholder,
  type,
  onChange,
  value,
  enabled,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="text-sm pt-2">
        {label}
      </label>
      <input
        id="input"
        name="input"
        className="px-3 py-2 rounded-md outline-none text-black focus:outline-orange-500 "
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={!enabled}
      />
    </div>
  );
};
