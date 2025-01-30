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
    <div className="w-full rounded-lg overflow-hidden ">
      <table className="w-full border-collapse rounded-lg">
        <thead className="bg-primary-color-600 text-center text-white">
          <tr>
            <th className="p-3 text-center w-1/4">CPF</th>
            <th className="p-3 text-center w-1/4">Nome</th>
            <th className="p-3 text-center w-1/4">Cargo</th>
            <th className="p-3 text-center w-1/4">Salário</th>
            <th className="p-3 text-center w-1/4">Excluir</th>
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
              <td colSpan={4} className="p-4 text-center text-gray-500">
                Nenhum funcionário registrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
