"use client";

import { FiUsers } from "react-icons/fi";
import type { ReactEventHandler } from "react";

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

interface TeamCardProps {
  team: Team;
  onClick: ReactEventHandler;
}

export const TeamCard = ({ team, onClick }: TeamCardProps) => {
  return (
    <div
      className="group cursor-pointer rounded-xl xl:w-card-team overflow-hidden shadow-sm hover:shadow-md bg-white 
                 transition-all duration-300 ease-out hover:-translate-y-1 
                 border border-gray-200 hover:border-blue-100
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* Header com gradiente e ícone */}
      <div
        className="bg-gradient-to-r from-blue-700 to-blue-600 p-5
                     transition-colors duration-300 group-hover:from-blue-800 group-hover:to-blue-700"
      >
        <div className="flex items-center gap-3">
          <FiUsers className="text-white/80 w-6 h-6" />
          <h3
            className="text-white text-xl font-semibold truncate 
                        drop-shadow-sm"
          >
            {team.name}
          </h3>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="p-5 flex flex-col gap-4">
        <p
          className="text-gray-700 text-base leading-snug min-h-[60px] line-clamp-2
                     font-medium"
        >
          {team.description || "Nenhuma descrição fornecida"}
        </p>

        {/* Rodapé informativo */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span
            className="inline-flex items-center gap-2
                          text-sm font-medium text-blue-700"
          >
            <FiUsers className="w-4 h-4" />
            {team.employees.length} membro{team.employees.length !== 1 && "s"}
          </span>

          <span className="text-sm text-gray-500 font-medium">
            ID: #{team.id.toString().padStart(3, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};
