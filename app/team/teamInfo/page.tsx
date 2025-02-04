"use client";

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

interface TeamDetailsProps {
  team?: Team;
}

// Mapeamento de cores para cada função
const getRoleStyle = (role: string) => {
  switch (role) {
    case "DesenvolvedorFrontEnd":
      return "bg-blue-100 text-blue-800 border border-blue-200";
    case "DesenvolvedorBackEnd":
      return "bg-green-100 text-green-800 border border-green-200";
    case "UIUXDesigner":
      return "bg-purple-100 text-purple-800 border border-purple-200";
    case "QA":
      return "bg-yellow-100 text-yellow-800 border border-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 border border-gray-200";
  }
};

export const TeamDetails = ({ team }: TeamDetailsProps) => {
  if (!team) {
    return (
      <p className="text-gray-500 text-center mt-6 text-lg">
        Nenhuma equipe selecionada.
      </p>
    );
  }

  return (
    <div className="p-6  bg-gray-100 shadow-lg rounded-xl ">
      <h2 className="text-3xl font-bold text-gray-800">{team.name}</h2>
      <p className="text-lg text-gray-600 mt-2">{team.description}</p>

      <h3 className="mt-6 text-2xl font-semibold text-gray-700">
        Membros da equipe:
      </h3>

      <div className="mt-4 bg-blue-100 p-4 rounded-lg">
        {team.employees && team.employees.length > 0 ? (
          <ul className="space-y-2 max-h-56 overflow-y-auto custom-scrollbar">
            {team.employees.map((employee) => (
              <li
                key={employee.cpf}
                className="flex bg-blue-50 justify-between flex-col sm:flex-row gap-2 items-center p-3 rounded-md shadow-sm border border-blue-300"
              >
                <span className="text-blue-900 font-medium">
                  {employee.name}
                </span>
                <span
                  className={`${getRoleStyle(
                    employee.role
                  )} py-1 px-3 rounded-full text-sm font-medium`}
                >
                  {employee.role}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-blue-700 italic text-center">
            Nenhum funcionário na equipe.
          </p>
        )}
      </div>
    </div>
  );
};
