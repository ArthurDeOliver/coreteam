"use client";
// ... outros imports
type Employee = {
  cpf: string;
  name: string;
  role: string;
  salary: string;
  // Adicione outros campos se necessário
};

interface SelectEmployeeProps {
  disable: boolean;
  employeeList: Employee[];
  setSelectedEmployee: (employee: Employee | null) => void;
}

export const SelectEmployee = ({
  disable,
  employeeList,
  setSelectedEmployee,
}: SelectEmployeeProps) => {
  return (
    <div className="flex w-full sm:w-fit flex-col gap-2">
      <span className="text-sm">Funcionário:</span>
      <select
        disabled={disable}
        onChange={(e) => {
          const selectedCPF = e.target.value;
          const employee = employeeList.find((emp) => emp.cpf === selectedCPF);
          setSelectedEmployee(employee || null);
        }}
        className="py-2.5 px-4 w-full rounded-md outline-none text-black focus:outline-orange-500"
      >
        <option value="" className="text-gray-600">
          Selecione o funcionário
        </option>
        {employeeList.map((employee) => (
          <option key={employee.cpf} value={employee.cpf}>
            {employee.name} - {employee.role}
          </option>
        ))}
      </select>
    </div>
  );
};
