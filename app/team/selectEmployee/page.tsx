"use client";

import type { ChangeEventHandler } from "react";

interface Employee {
  cpf: string;
  name: string;
  role: string;
  salary: string;
}

interface EmployeeSelectProps {
  employeeList: Employee[];
  enable?: boolean;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const EmployeeSelect = ({
  onChange,
  employeeList,
  enable = true,
}: EmployeeSelectProps) => {
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <label className="text-sm font-medium text-gray-700">Funcionário</label>
      <select
        required
        onChange={onChange}
        className={`py-2.5 px-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-gray-900 ${
          !enable ? "bg-gray-100 cursor-not-allowed" : "bg-white"
        }`}
      >
        <option value="">Selecione um funcionário</option>
        {employeeList.length > 0 ? (
          employeeList.map((employee) => (
            <option key={employee.cpf} value={employee.cpf}>
              {employee.name}
            </option>
          ))
        ) : (
          <option disabled>Nenhum funcionário disponível</option>
        )}
      </select>
    </div>
  );
};
