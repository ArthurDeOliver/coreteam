"use client";
import { useState } from "react";
import { ButtonDefault } from "@/app/components/button/buttonDefault/page";
import { InputComponent } from "@/app/components/input/page";
import { RoleSelect } from "@/app/components/select/page";
import { IoCloseCircle } from "react-icons/io5";

//necessário possuir o state do setmodal para mudar seu estado para false
interface ModalComponenProps {
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
  setIsModalOpen: (value: boolean) => void;
}

export const ModalComponent = ({
  setIsModalOpen,
  setEmployeeList,
}: ModalComponenProps) => {
  // Estado com um objeto contendo as propriedades
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    salary: "",
    role: "",
  });

  //validação dos inputs
  const isValid =
    formData.name.trim().length >= 10 && // Nome com pelo menos 10 caracteres
    formData.cpf.trim().length === 11 && // CPF com exatamente 11 caracteres
    !isNaN(Number(formData.salary)) && // Salário é um número válido
    Number(formData.salary) > 0 && // Salário maior que zero
    formData.role !== "none"; // Função selecionada

  // Função genérica para lidar com as mudanças no estado
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Atualiza a propriedade correspondente no estado
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/employee/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      if (response.ok) {
        const newEmployee = await response.json();
        setEmployeeList((prevList) => [...prevList, newEmployee]);
        setIsModalOpen(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    //fixed permite o componente ficar fixo a tela primeira div cria o fundo, segunda div a tela em si
    <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-10 px-4 sm:px-0">
      <div className="bg-bg-page-950 relative rounded-md shadow-lg p-6 flex flex-col  max-w-2xl text-sm sm:text-base w-full  custom-scrollbar">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-white">Cadastrar Funcionário</h2>
          <button
            className="absolute -top-4 -right-4 bg-white rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <IoCloseCircle
              className="fill-cancel-color-700 hover:fill-cancel-color-900 transition-all"
              size={35}
            />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-full flex gap-4 flex-col sm:flex-row">
            <InputComponent
              value={formData.name}
              onChange={handleChange}
              enabled={true}
              label="Nome"
              placeholder="Digite o nome do funcionário"
              type="text"
              name="name" // Adiciona o nome para identificar a propriedade
            />
            <InputComponent
              value={formData.cpf}
              onChange={handleChange}
              enabled={true}
              label="Cpf"
              placeholder="Digite seu CPF"
              type="text"
              name="cpf" // Adiciona o nome para identificar a propriedade
            />
          </div>
          <div className="w-full flex gap-4  items-end flex-col sm:flex-row">
            <InputComponent
              value={formData.salary}
              onChange={handleChange}
              enabled={true}
              label="Salário"
              placeholder="Digite o salário do novo funcionário"
              type="text"
              name="salary" // Adiciona o nome para identificar a propriedade
            />
            <RoleSelect
              value={formData.role}
              onChange={handleChange}
              name="role" // Adiciona o nome para identificar a propriedade
            />
          </div>
          <div className="w-full mt-5">
            <ButtonDefault text="Cadastrar" enable={isValid} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
