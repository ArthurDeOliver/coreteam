"use client";

import { ButtonDefault } from "@/app/components/button/buttonDefault/page";
import { InputComponent } from "@/app/components/input/page";
import { RoleSelect } from "@/app/components/select/page";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

interface ModalComponentProps {
  setIsModalOpen: (value: boolean) => void;
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

export const ModalEditEmployee = ({
  setIsModalOpen,
  employee,
  setEmployeeList,
}: ModalComponentProps) => {
  const [formData, setFormData] = useState({
    name: employee.name,
    salary: employee.salary,
    role: employee.role,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Converte o salário para número antes de enviar
      const updatedData = {
        ...formData,
        salary: Number(formData.salary),
      };

      const response = await fetch(
        `http://localhost:3001/employee/${employee.cpf}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        const updatedEmployee = await response.json();

        // Atualiza a lista de funcionários
        setEmployeeList((prevList) =>
          prevList.map((emp) =>
            emp.cpf === employee.cpf
              ? {
                  ...emp,
                  name: updatedEmployee.name,
                  salary: updatedEmployee.salary.toString(), // Garante que o salário seja uma string
                  role: updatedEmployee.role,
                }
              : emp
          )
        );

        // Fecha o modal
        setIsModalOpen(false);
      } else {
        console.error("Erro ao atualizar funcionário");
      }
    } catch (e) {
      console.error("Erro ao atualizar funcionário:", e);
    }
  };

  const isValid =
    formData.name.trim().length >= 10 &&
    !isNaN(Number(formData.salary)) &&
    Number(formData.salary) > 0 &&
    formData.role !== "none";

  return (
    <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-10 px-4 sm:px-0">
      <div className="bg-white relative rounded-lg shadow-lg p-6 flex flex-col max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Editar Funcionário
          </h2>
          <button
            className="absolute -top-4 -right-4 bg-white rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <IoCloseCircle
              className="text-red-600 hover:text-red-700 transition-colors"
              size={35}
            />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="w-full flex gap-6 flex-col sm:flex-row flex-wrap">
            <InputComponent
              maxLength={20}
              value={formData.name}
              onChange={handleChange}
              enabled={true}
              label="Novo nome"
              placeholder="Novo nome do funcionário"
              type="text"
              name="name"
            />
            <InputComponent
              maxLength={5}
              value={formData.salary}
              onChange={handleChange}
              enabled={true}
              label="Novo salário"
              placeholder="Digite o novo salário"
              type="text"
              name="salary"
            />
            <RoleSelect
              enable={true}
              value={formData.role}
              onChange={handleChange}
              name="role"
            />
          </div>

          <div className="w-full mt-4">
            <ButtonDefault text="Editar" enable={isValid} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
