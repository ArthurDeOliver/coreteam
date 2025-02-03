"use client";

import { LogoPage } from "@/app/components/logo/page";
import { TiGroup } from "react-icons/ti";
import { AsideNav } from "../components/aside/page";
import { useEffect, useState } from "react";
import { ButtonAdd } from "../components/button/buttonAdd/page";
import { ModalCreateTeam } from "./modalCreateTeam/page";

interface Employee {
  cpf: string;
  name: string;
  role: string;
  salary: string;
}

interface Team {
  id: number;
  name: string;
  description: string;
  employes: Employee[];
}

const TeamPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [teamsList, setTeamsList] = useState<Team[]>([]);

  const fetchTeams = async () => {
    try {
      const response = await fetch("http://localhost:3001/team");
      const teamsData = await response.json();
      setTeamsList(teamsData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <header className="w-full px-6 py-4 bg-white shadow-sm">
        <LogoPage />
      </header>

      <div className="flex flex-col xl:flex-row gap-6 p-6">
        <AsideNav />

        <div className="w-full bg-white p-6 rounded-xl shadow-md flex flex-col gap-8">
          <h1 className="text-2xl text-gray-800 flex items-center bg-gradient-to-r from-blue-700 to-purple-950 bg-clip-text text-transparent   select-none gap-3 pb-4 border-b border-gray-200 font-montserrat font-semibold">
            <TiGroup size={35} className="text-blue-700" />
            Funcionários
          </h1>

          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col sm:flex-row gap-6 w-full items-center justify-between">
              <span className="text-gray-600 text-lg">
                Crie equipes de desenvolvimento
              </span>

              <div className="w-full sm:w-48">
                <ButtonAdd
                  text="Criar Equipe"
                  enabled={true}
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </div>
            <div>
              <h1 className="text-black"></h1>
            </div>
            {isModalOpen && <ModalCreateTeam setIsModalOpen={setIsModalOpen} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamPage;
