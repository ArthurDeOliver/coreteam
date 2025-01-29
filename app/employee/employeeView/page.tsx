"use client";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
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
    <div>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full font-montserrat max-h-96 overflow-y-scroll">
          {/* Cabeçalho */}
          <thead className="bg-primary-color-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Cpf</th>
              <th className="py-3 px-6 text-left">Nome</th>
              <th className="py-3 px-6 text-left">Função</th>
              <th className="py-3 px-6 text-left">Salário</th>
              <th className="py-3 px-6 text-center">Excluir</th>
            </tr>
          </thead>

          {/* Corpo */}
          <tbody>
            {employeeList
              .map((employee) => (
                <RowEmployee
                  key={employee.cpf}
                  setEmployeeList={setEmployeeList}
                  employee={employee}
                />
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
};
