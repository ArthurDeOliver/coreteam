"use client";

import { LogoPage } from "@/app/components/logo/page";
import { AsideNav } from "../components/aside/page";
import { TiGroup } from "react-icons/ti";
import { ButtonAdd } from "../components/button/buttonAdd/page";
import { useEffect, useRef, useState } from "react";
import { ModalComponentTeams } from "./modalTeams/page";
import { CardTeam } from "./cardTeam/page";
import { SelectedTeam } from "./selectedTeam/page";

interface Team {
  id: number;
  name: string;
  description: string;
}

const TeamsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //tela modal
  const selectedTeamRef = useRef<HTMLDivElement>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const handleSelectTeam = (team: Team) => {
    setSelectedTeam(team);
    setTimeout(() => {
      selectedTeamRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const [teamsList, setTeamsList] = useState<
    Array<{
      id: number;
      name: string;
      description: string;
    }>
  >([]);

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
    <main className="flex flex-col">
      <header className="w-full p-4">
        <LogoPage />
      </header>

      <div className="flex flex-col min-h-dvh sm:flex-row gap-5 p-2">
        <AsideNav />
        <div className="w-full bg-bg-page-950 p-4 rounded-md flex flex-col gap-10 sm:gap-5">
          <h1 className=" text-2xl text-primary-color-500 flex items-center gap-2 pb-2 border-b-2 border-gray-900 font-montserrat">
            <TiGroup size={35} />
            Equipes
          </h1>
          <div className="flex flex-col sm:flex-row gap-10 w-full items-center justify-between px-5">
            <span className="text-font-primary-500">
              Crie equipes de funcionários e defina seus objetivos!
            </span>

            <div className="w-full h-16 sm:w-60 sm:h-12">
              <ButtonAdd
                text="Criar Equipe"
                enabled={true}
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
          <div className="px-5">
            <h1 className="text-xl">Equipes cadastradas</h1>
            <span className="text-font-primary-700 text-sm">
              clique nos cards para cadastro de funcionários e mais informações
            </span>
          </div>

          <div className="w-full bg-gray-900 flex gap-4 p-4 max-h-96 rounded-md flex-wrap overflow-y-auto custom-scrollbar">
            {teamsList.map((team) => (
              <CardTeam
                onClick={() => handleSelectTeam(team)}
                key={team.id}
                description={team.description}
                id={team.id}
                name={team.name}
              />
            ))}
          </div>

          <div ref={selectedTeamRef}>
            <SelectedTeam selectedTeam={selectedTeam} />
          </div>
        </div>
        {isModalOpen && (
          <ModalComponentTeams
            refreshTeams={fetchTeams}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </main>
  );
};

export default TeamsPage;
