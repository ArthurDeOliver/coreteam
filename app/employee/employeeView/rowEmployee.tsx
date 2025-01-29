"use client";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

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
    <tr className="bg-bg-page-950 font-montserrat">
      <td className="py-3 px-6 border-b border-gray-400">{employee.cpf}</td>
      <td className="py-3 px-6 border-b border-gray-400">{employee.name}</td>
      <td className="py-3 px-6 border-b border-gray-400">{employee.role}</td>
      <td className="py-3 px-6 border-b border-gray-400">
        R$ {employee.salary}
      </td>
      <td className="py-3 px-6 border-b border-gray-400 ">
        <div className="flex w-full items-center justify-between">
          <button onClick={() => handleDeleteEmployee(employee.cpf)}>
            <FaTrashAlt
              className="hover:fill-cancel-color-700 transition-all"
              size={20}
            />
          </button>
          <button>
            <MdEdit
              className="hover:fill-yellow-500 transition-all"
              size={24}
            />
          </button>
        </div>
      </td>
    </tr>
  );
};
