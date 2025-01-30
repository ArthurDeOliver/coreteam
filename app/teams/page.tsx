"use client";

import { LogoPage } from "@/app/components/logo/page";
import { AsideNav } from "../components/aside/page";
import { TiGroup } from "react-icons/ti";
import { ButtonAdd } from "../components/button/buttonAdd/page";
import { useEffect, useState } from "react";
import { ModalComponentTeams } from "./modalTeams/page";

const TeamsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //tela modal

  const [teamsList, setTeamsList] = useState<
    Array<{
      name: string;
      description: string;
    }>
  >([]);

  const fetchTeams = async () => {
    try {
      const response = await fetch("http://localhost:3001/teams");
      const teamsData = await response.json();
      setTeamsList(teamsData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(teamsList);
    fetchTeams();
  }, []);

  return (
    <main className="flex flex-col">
      <header className="w-full p-4">
        <LogoPage />
      </header>

      <div className="flex flex-col sm:flex-row gap-5 p-2">
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
        </div>
        {isModalOpen && <ModalComponentTeams setIsModalOpen={setIsModalOpen} />}
      </div>
    </main>
  );
};

export default TeamsPage;
