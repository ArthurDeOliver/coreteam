"use client";

import { LogoPage } from "@/app/components/logo/page";
import { AsideNav } from "../components/aside/page";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";
import { ButtonAdd } from "../components/button/buttonAdd/page";
import { ModalComponent } from "./modalComponent/page";
import { EmployeeView } from "./employeeView/page";

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
  return (
    <main className="flex flex-col ">
      <header className="w-full p-4">
        <LogoPage />
      </header>

      <div className="flex gap-5 p-2">
        <AsideNav />
        <div className="w-full bg-bg-page-950 p-4 rounded-md flex flex-col gap-6">
          <h1 className=" text-2xl text-primary-color-500 flex items-center gap-2 pb-2 border-b-2 border-gray-900">
            <FaUserFriends size={35} />
            Funcionários
          </h1>
          <div className="flex justify-center items-center w-full flex-col gap-5 px-5">
            <div className="flex w-full items-center justify-between">
              <span className="text-font-primary-500">
                Lista de funcioários cadastrados no sistema CoreTeam
              </span>
              <div className="max-w-60">
                <ButtonAdd
                  text="Adicionar funcionário"
                  enabled={true}
                  onClick={() => setIsModalOpen(true)}
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
                employeeList={employeeList}
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
