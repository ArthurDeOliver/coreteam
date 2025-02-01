"use client";
import { useEffect } from "react";
import { RowEmployee } from "./rowEmployee";

interface EmployeeViewProps {
  employeeList: Array<{
    cpf: string;
    name: string;
    role: string;
    salary: string;
  }>;
  setEmployeeList: React.Dispatch<
    React.SetStateAction<
      Array<{
        cpf: string;
        name: string;
        role: string;
        salary: string;
      }>
    >
  >;
}

export const EmployeeView = ({
  employeeList,
  setEmployeeList,
}: EmployeeViewProps) => {
  const fetchEmployee = async () => {
    try {
      const response = await fetch("http://localhost:3001/employee");
      const employeeData = await response.json();
      setEmployeeList(employeeData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <table className="w-full border-collapse bg-white">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4 text-left font-medium">CPF</th>
            <th className="p-4 text-left font-medium">Nome</th>
            <th className="p-4 text-left font-medium">Cargo</th>
            <th className="p-4 text-left font-medium">Salário</th>
            <th className="p-4 text-center font-medium">Ações</th>
          </tr>
        </thead>

        <tbody>
          {employeeList.length > 0 ? (
            employeeList
              .slice() // Cria cópia para não alterar o array original
              .reverse()
              .map((employee) => (
                <RowEmployee
                  key={employee.cpf}
                  setEmployeeList={setEmployeeList}
                  employee={employee}
                />
              ))
          ) : (
            <tr>
              <td colSpan={5} className="p-6 text-center text-gray-500">
                Nenhum funcionário registrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
