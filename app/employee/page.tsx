"use client";

import { LogoPage } from "@/app/components/logo/page";
import { AsideNav } from "../components/aside/page";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";
import { ButtonAdd } from "../components/button/buttonAdd/page";
import { ModalComponent } from "./modalComponent/page";
import { EmployeeView } from "./employeeView/page";
import { ButtonDefault } from "../components/button/buttonDefault/page";

type FilterType =
  | "none"
  | "DesenvolvedorFrontEnd"
  | "DesenvolvedorBackEnd"
  | "UIUXDesigner"
  | "QA";

const EmployeePage = () => {
  //estados
  const [isModalOpen, setIsModalOpen] = useState(false); //tela modal

  const [selectedFilter, setSelectedFilter] = useState<FilterType>("none"); //selecionado oq deseja filtrar
  const [appliedFilter, setAppliedFilter] = useState<FilterType>("none"); //aplica o que foi selecionado para filtrar

  // Função para aplicar o filtro, função que aplica o filtro selecionado
  const handleApplyFilter = () => {
    setAppliedFilter(selectedFilter);
  };

  const [employeeList, setEmployeeList] = useState<
    Array<{
      cpf: string;
      name: string;
      role: string;
      salary: string;
    }>
  >([]);

  //variável que
  const filteredEmployees =
    appliedFilter === "none"
      ? employeeList
      : employeeList.filter((employee) => employee.role === appliedFilter);

  return (
    <main className="flex flex-col ">
      <header className="w-full p-4">
        <LogoPage />
      </header>

      <div className="flex flex-col sm:flex-row gap-5 p-2">
        <AsideNav />
        <div className="w-full bg-bg-page-950 p-4 rounded-md flex flex-col gap-10 sm:gap-5">
          <h1 className=" text-2xl text-primary-color-500 flex items-center gap-2 pb-2 border-b-2 border-gray-900">
            <FaUserFriends size={35} />
            Funcionários
          </h1>
          <div className="flex justify-center items-center w-full flex-col gap-10 px-5">
            <div className="flex flex-col sm:flex-row gap-10 w-full items-center justify-between">
              <span className="text-font-primary-500">
                Lista de funcioários cadastrados no sistema CoreTeam
              </span>

              <div className="w-full h-16 sm:w-60 sm:h-12">
                <ButtonAdd
                  text="Adicionar funcionário"
                  enabled={true}
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </div>
            <div className=" w-full flex items-end flex-col sm:flex-row  gap-6">
              <div className="flex w-full sm:w-fit  flex-col gap-2">
                <span>Filtro de pesquisa:</span>
                <select
                  value={selectedFilter}
                  onChange={(e) =>
                    setSelectedFilter(e.target.value as FilterType)
                  }
                  className="py-2.5 px-4 w-full sm:w-60 rounded-md outline-none text-black focus:outline-orange-500 "
                >
                  <option value="none" className="text-gray-600">
                    Todas os funcionários
                  </option>
                  <option value="DesenvolvedorFrontEnd">
                    Desenvolvedor FrontEnd
                  </option>
                  <option value="DesenvolvedorBackEnd">
                    Desenvolvedor BackEnd
                  </option>
                  <option value="UIUXDesigner">UI/UX Designer</option>
                  <option value="QA">QA</option>
                </select>
              </div>
              <div className="h-fit">
                <ButtonDefault
                  onClick={handleApplyFilter}
                  text="Aplicar"
                  enabled={true}
                />
              </div>
            </div>
            {isModalOpen && (
              <ModalComponent
                setEmployeeList={setEmployeeList}
                setIsModalOpen={setIsModalOpen}
              />
            )}
            <div className="w-full">
              <EmployeeView
                employeeList={filteredEmployees}
                setEmployeeList={setEmployeeList}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmployeePage;
