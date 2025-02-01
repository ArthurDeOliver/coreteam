"use client";

import { LogoPage } from "@/app/components/logo/page";
import { AsideNav } from "../components/aside/page";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";
import { ButtonAdd } from "../components/button/buttonAdd/page";
import { ModalComponent } from "./modalComponent/page";
import { EmployeeView } from "./employeeView/page";
import { ButtonDefault } from "../components/button/buttonDefault/page";
import { ModalEditEmployee } from "./modalEdit/page";

type FilterType =
  | "none"
  | "DesenvolvedorFrontEnd"
  | "DesenvolvedorBackEnd"
  | "UIUXDesigner"
  | "QA";

const EmployeePage = () => {
  const [employeeList, setEmployeeList] = useState<
    Array<{
      cpf: string;
      name: string;
      role: string;
      salary: string;
    }>
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState<FilterType>("none");
  const [appliedFilter, setAppliedFilter] = useState<FilterType>("none");

  const handleApplyFilter = () => {
    setAppliedFilter(selectedFilter);
  };

  const filteredEmployees =
    appliedFilter === "none"
      ? employeeList
      : employeeList.filter((employee) => employee.role === appliedFilter);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <header className="w-full p-6 bg-white shadow-sm">
        <LogoPage />
      </header>

      <div className="flex flex-col xl:flex-row gap-6 p-6">
        <AsideNav />

        <div className="w-full bg-white p-6 rounded-xl shadow-md flex flex-col gap-8">
          <h1 className="text-3xl text-gray-800 flex items-center gap-3 pb-4 border-b border-gray-200 font-montserrat font-semibold">
            <FaUserFriends size={35} className="text-blue-500" />
            Funcionários
          </h1>

          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col sm:flex-row gap-6 w-full items-center justify-between">
              <span className="text-gray-600 text-lg">
                Adicione funcionários e gerencie-os
              </span>

              <div className="w-full sm:w-48">
                <ButtonAdd
                  text="Adicionar"
                  enabled={true}
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-6 items-end">
              <div className="flex flex-col gap-2 w-full sm:w-64">
                <span className="text-gray-600">Filtro de pesquisa:</span>
                <select
                  value={selectedFilter}
                  onChange={(e) =>
                    setSelectedFilter(e.target.value as FilterType)
                  }
                  className="py-2.5 px-4 w-full text-black rounded-md outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                >
                  <option value="none" className="text-gray-500">
                    Todos os funcionários
                  </option>
                  <option
                    className="text-gray-900"
                    value="DesenvolvedorFrontEnd"
                  >
                    Desenvolvedor FrontEnd
                  </option>
                  <option
                    className="text-gray-900"
                    value="DesenvolvedorBackEnd"
                  >
                    Desenvolvedor BackEnd
                  </option>
                  <option className="text-gray-900" value="UIUXDesigner">
                    UI/UX Designer
                  </option>
                  <option className="text-gray-900" value="QA">
                    QA
                  </option>
                </select>
              </div>

              <div className="w-full sm:w-24">
                <ButtonDefault
                  onClick={handleApplyFilter}
                  text="Aplicar"
                  enable={true}
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
