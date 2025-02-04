"use client";

import { LogoPage } from "@/app/components/logo/page";
import { TiGroup } from "react-icons/ti";
import { AsideNav } from "../components/aside/page";
import { useEffect, useState, useRef } from "react";
import { ButtonAdd } from "../components/button/buttonAdd/page";
import { ModalCreateTeam } from "./modalCreateTeam/page";
import { TeamCard } from "./teamCard/page";
import { TeamDetails } from "./teamInfo/page";

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
  employees: Employee[];
}

const TeamPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamsList, setTeamsList] = useState<Team[]>([]); // Garantindo que seja sempre um array
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null); // Estado para a equipe selecionada
  const teamInfoRef = useRef<HTMLDivElement | null>(null); // Ref para a seção com as informações da equipe

  const fetchTeams = async () => {
    try {
      const response = await fetch("http://localhost:3001/team");
      if (!response.ok) throw new Error("Falha ao carregar equipes");

      const teamsData = await response.json();
      console.log("Dados recebidos do backend:", teamsData); // Verifica como os dados estão vindo

      setTeamsList(teamsData);
    } catch (error) {
      console.error("Erro:", error);
      setTeamsList([]);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    fetchTeams(); // Atualiza a lista de equipes após o fechamento do modal
  };

  const handleCardClick = (team: Team) => {
    setSelectedTeam(team); // Define a equipe selecionada
    scrollToTeamInfo(); // Faz o scroll até a seção de detalhes
  };

  const scrollToTeamInfo = () => {
    if (teamInfoRef.current) {
      teamInfoRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll suave até a seção
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <header className="w-full px-6 py-4 bg-white shadow-sm">
        <LogoPage />
      </header>

      <div className="flex flex-col xl:flex-row gap-6 p-6">
        <AsideNav />

        <div className="w-full bg-white p-6 rounded-xl shadow-md flex flex-col gap-8">
          <h1 className="text-2xl text-gray-800 flex items-center bg-gradient-to-r from-blue-700 to-purple-950 bg-clip-text text-transparent select-none gap-3 pb-4 border-b border-gray-200 font-montserrat font-semibold">
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
            <div className="px-5 py-3 overflow-y-scroll custom-scrollbar max-h-80 shadow-md flex-col xl:flex-row bg-gray-100 flex gap-6 flex-wrap rounded-md">
              {teamsList.length > 0 ? (
                teamsList.map((team) => (
                  <TeamCard
                    key={team.id}
                    team={team}
                    onClick={() => {
                      handleCardClick(team);
                      console.log(team);
                    }}
                  />
                ))
              ) : (
                <p className="w-full text-center text-gray-800">
                  Não há equipes para exibir.
                </p>
              )}
            </div>

            {/* Exibe as informações da equipe selecionada */}
            {selectedTeam && (
              <div ref={teamInfoRef}>
                <TeamDetails team={selectedTeam} />
              </div>
            )}

            {isModalOpen && (
              <ModalCreateTeam setIsModalOpen={handleCloseModal} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamPage;
