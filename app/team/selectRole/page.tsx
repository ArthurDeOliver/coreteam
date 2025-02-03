"use client";

import type { ChangeEventHandler } from "react";

interface RoleSelectProps {
  name: string;
  enable: boolean;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const RoleSelect = ({ onChange, name, enable }: RoleSelectProps) => {
  return (
    <div className="flex w-full flex-col gap-2 h-full">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        Função
      </label>
      <select
        disabled={!enable}
        required
        name={name}
        onChange={onChange}
        className={`py-2.5 px-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-gray-900 ${
          !enable ? "bg-gray-100 cursor-not-allowed" : "bg-white"
        }`}
      >
        <option value="">Selecione a função</option>
        <option value="DesenvolvedorFrontEnd">Desenvolvedor FrontEnd</option>
        <option value="DesenvolvedorBackEnd">Desenvolvedor BackEnd</option>
        <option value="UIUXDesigner">UI/UX Designer</option>
        <option value="QA">QA</option>
      </select>
    </div>
  );
};
