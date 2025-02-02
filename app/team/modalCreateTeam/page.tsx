"use client";
import { useState } from "react";
import { ButtonDefault } from "@/app/components/button/buttonDefault/page";
import { InputComponent } from "@/app/components/input/page";
import { RoleSelect } from "@/app/components/select/page";
import { IoCloseCircle } from "react-icons/io5";

interface ModalComponentProps {
  setIsModalOpen: (value: boolean) => void;
}

export const ModalCreateTeaam = ({ setIsModalOpen }: ModalComponentProps) => {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    salary: "",
    role: "",
  });

  const isValid =
    formData.name.trim().length >= 10 &&
    formData.cpf.trim().length === 11 &&
    !isNaN(Number(formData.salary)) &&
    Number(formData.salary) > 0 &&
    formData.role !== "none";

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
  };

  return (
    <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-10 px-4 sm:px-0">
      <div className="bg-white relative rounded-lg shadow-lg p-6 flex flex-col max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Cadastrar Funcionário
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
          <div className="w-full flex gap-6 flex-col sm:flex-row">
            <InputComponent
              maxLength={20}
              value={formData.name}
              onChange={handleChange}
              enabled={true}
              label="Nome"
              placeholder="Digite o nome do funcionário"
              type="text"
              name="name"
            />
            <InputComponent
              maxLength={11}
              value={formData.cpf}
              onChange={handleChange}
              enabled={true}
              label="CPF"
              placeholder="Digite o CPF"
              type="text"
              name="cpf"
            />
          </div>

          <div className="w-full flex gap-6 items-end flex-col sm:flex-row">
            <InputComponent
              maxLength={5}
              value={formData.salary}
              onChange={handleChange}
              enabled={true}
              label="Salário"
              placeholder="Digite o salário"
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
            <ButtonDefault text="Cadastrar" enable={isValid} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
