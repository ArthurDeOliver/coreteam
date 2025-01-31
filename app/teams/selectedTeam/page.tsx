"use client";

interface Team {
  id: number;
  name: string;
  description: string;
}

interface SelectedTeamProps {
  selectedTeam: Team | null;
}

export const SelectedTeam = ({ selectedTeam }: SelectedTeamProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span>{selectedTeam?.id}</span>
      <span>{selectedTeam?.name}</span>
      <span>{selectedTeam?.description}</span>
    </div>
  );
};
