"use client";

import { FaTrashAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { ModalEditEmployee } from "../modalEdit/page";
import { useState } from "react";

interface RowEmployeeProps {
  employee: {
    cpf: string;
    name: string;
    role: string;
    salary: string;
  };
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

export const RowEmployee = ({
  employee,
  setEmployeeList,
}: RowEmployeeProps) => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const handleDeleteEmployee = async (cpf: string) => {
    try {
      await fetch(`http://localhost:3001/employee/${cpf}`, {
        method: "DELETE",
      });
      setEmployeeList((prev) =>
        prev.filter((employee) => employee.cpf !== cpf)
      );
    } catch (e) {
      console.log(e);
    }
  };

  // Função para definir o estilo do cargo com base no tipo de função
  const getRoleStyle = (role: string) => {
    switch (role) {
      case "DesenvolvedorFrontEnd":
        return "bg-blue-100 text-blue-800 border border-blue-200"; // Azul claro com texto azul escuro e borda azul
      case "DesenvolvedorBackEnd":
        return "bg-green-100 text-green-800 border border-green-200"; // Verde claro com texto verde escuro e borda verde
      case "UIUXDesigner":
        return "bg-purple-100 text-purple-800 border border-purple-200"; // Roxo claro com texto roxo escuro e borda roxa
      case "QA":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200"; // Amarelo claro com texto amarelo escuro e borda amarela
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200"; // Cinza para outros cargos
    }
  };

  return (
    <tr className="bg-white hover:bg-gray-50 transition-colors font-montserrat">
      <td className="py-4 px-6 border-b border-gray-200 text-black">
        {employee.cpf}
      </td>
      <td className="py-4 px-6 border-b border-gray-200 text-black">
        {employee.name}
      </td>
      <td className="py-4 px-6 border-b border-gray-200">
        <span
          className={`${getRoleStyle(
            employee.role
          )} py-1 px-3 rounded-full text-sm font-medium`}
        >
          {employee.role}
        </span>
      </td>
      <td className="py-4 px-6 border-b border-gray-200 text-center text-black">
        R$ {employee.salary}
      </td>
      <td className="py-4 px-6 border-b border-gray-200">
        <div className="flex w-full items-center justify-between">
          <button
            onClick={() => handleDeleteEmployee(employee.cpf)}
            className="hover:bg-red-50 p-2 rounded-full transition-colors"
          >
            <FaTrashAlt
              className="text-red-600 hover:text-red-700 transition-colors"
              size={20}
            />
          </button>
          <button
            onClick={() => setIsModalEditOpen(true)}
            className="hover:bg-red-50 p-2 rounded-full transition-colors"
          >
            <FaUserEdit
              className="text-yellow-600 hover:text-yellow-700 transition-colors"
              size={24}
            />
          </button>
        </div>
      </td>
      {isModalEditOpen && (
        <ModalEditEmployee
          setEmployeeList={setEmployeeList}
          setIsModalOpen={setIsModalEditOpen}
          employee={employee}
        />
      )}
    </tr>
  );
};
