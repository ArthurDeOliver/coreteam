"use client";

import { FaTrashAlt } from "react-icons/fa";
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

  const handleModalOpen = () => {
    setIsModalEditOpen(true);
  };

  const handleDeleteEmployee = async (cpf: string) => {
    try {
      console.log("teste");
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

  return (
    <tr className="bg-font-primary-200 text-black  font-montserrat">
      <td className="py-3 px-6 border-b border-gray-900">{employee.cpf}</td>
      <td className="py-3 px-6 border-b border-gray-900">{employee.name}</td>
      <td className="py-3 px-6 border-b border-gray-900">{employee.role}</td>
      <td className="py-3 px-6 border-b border-gray-900">
        R$ {employee.salary}
      </td>
      <td className="py-3 px-6 border-b border-gray-900 ">
        <div className="flex w-full items-center justify-between">
          <button onClick={() => handleDeleteEmployee(employee.cpf)}>
            <FaTrashAlt
              color="black"
              className="hover:fill-cancel-color-700 transition-all"
              size={20}
            />
          </button>
        </div>
      </td>
    </tr>
  );
};
