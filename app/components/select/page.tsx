"use client";

import type { ChangeEventHandler } from "react";

interface RoleSelectProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const RoleSelect = ({ value, onChange, name }: RoleSelectProps) => {
  return (
    <div className="flex w-full flex-col gap-2 h-full">
      <p className="text-sm">Função</p>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className="py-2.5 px-4 rounded-md outline-none text-black focus:outline-orange-500 "
      >
        <option value="DesenvolvedorFrontEnd">Desenvolvedor FrontEnd</option>
        <option value="DesenvolvedorBackEnd">Desenvolvedor BackEnd</option>
        <option value="UIUXDesigner">UI/UX Designer</option>
        <option value="QA">QA</option>
      </select>
    </div>
  );
};
