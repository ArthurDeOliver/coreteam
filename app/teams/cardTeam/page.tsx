"use client";

import { TiGroup } from "react-icons/ti";
interface CardTeamProps {
  id: number;
  name: string;
  description: string;
  onClick: () => any;
}
export const CardTeam = ({ name, id, description, onClick }: CardTeamProps) => {
  return (
    <div
      onClick={onClick}
      key={id}
      className=" cursor-pointer hover:scale-105  bg-card-default-950 hover:bg-card-hover-600 flex flex-col w-full  lg:w-card-team rounded-md overflow-hidden transition-all"
    >
      <div className="bg-transparent py-3 px-2">
        <span className="text-white font-semibold flex items-center gap-2">
          <TiGroup size={24} /> {name}
        </span>
      </div>
      <div className="bg-font-primary-950 min-h-32 flex flex-col gap-1 py-3 px-2">
        <span className="text-white min-h-16">{description}</span>
      </div>
    </div>
  );
};
