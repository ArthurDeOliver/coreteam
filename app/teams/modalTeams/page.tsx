"use client";
import { useState } from "react";
import { ButtonDefault } from "@/app/components/button/buttonDefault/page";
import { InputComponent } from "@/app/components/input/page";
import { IoCloseCircle } from "react-icons/io5";

interface ModalComponenProps {
  setIsModalOpen: (value: boolean) => void;
}

export const ModalComponentTeams = ({ setIsModalOpen }: ModalComponenProps) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const isValid =
    formData.name.trim().length && formData.description.trim().length >= 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Cria a equipe
      const teamResponse = await fetch("http://localhost:3001/team/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      //fechamento do modal
      setIsModalOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChanger = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-10 px-4 sm:px-0">
      <div className="custom-scrollbar bg-bg-page-950 relative rounded-md shadow-lg p-6 flex flex-col max-w-2xl text-sm sm:text-base w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-white">Criar Equipe</h2>
          <button
            className="absolute -top-4 -right-4 z-20 bg-white rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <IoCloseCircle
              className="fill-cancel-color-700 hover:fill-cancel-color-900 transition-all"
              size={35}
            />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex gap-4 items-end flex-col sm:flex-row">
            <InputComponent
              value={formData.name}
              onChange={handleChanger}
              enabled={true}
              label="Nome da equipe"
              placeholder="Digite o nome da equipe"
              type="text"
              name="name"
            />
            <InputComponent
              value={formData.description}
              onChange={handleChanger}
              enabled={true}
              label="Descrição da equipe"
              placeholder="Ex:. Equipe de dev"
              type="text"
              name="description"
            />
            <div className="w-full">
              <ButtonDefault enabled={isValid} text="Cadastrar" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
