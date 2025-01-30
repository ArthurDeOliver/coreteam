"use client";
import { useEffect, useState } from "react";
import { ButtonDefault } from "@/app/components/button/buttonDefault/page";
import { InputComponent } from "@/app/components/input/page";
import { IoCloseCircle } from "react-icons/io5";
import { SelectEmployee } from "./selectEmployee";

interface ModalComponenProps {
  setIsModalOpen: (value: boolean) => void;
  teamsList: Array<{
    name: string;
    description: string;
  }>;
}

type FilterType =
  | "none"
  | "DesenvolvedorFrontEnd"
  | "DesenvolvedorBackEnd"
  | "QA"
  | "UIUXDesigner";

type Employee = {
  cpf: string;
  name: string;
  role: string;
  salary: string;
};

export const ModalComponentTeams = ({
  setIsModalOpen,
  teamsList,
}: ModalComponenProps) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [isSelectDisable, setIsSelectDisable] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("none");
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
  const [teamId, setTeamId] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isTeamCreated, setIsTeamCreated] = useState(false);

  const fetchEmployee = async () => {
    try {
      const response = await fetch("http://localhost:3001/employee");
      const employeeData = await response.json();
      setEmployeeList(employeeData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Cria a equipe
      const teamResponse = await fetch("http://localhost:3001/team/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!teamResponse.ok) throw new Error("Erro ao criar equipe");

      const teamData = await teamResponse.json();
      setTeamId(teamData.id);
      setIsSelectDisable(false);
      setIsTeamCreated(true); // Marca que a equipe foi criada
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateTeam = async () => {
    try {
      // Associa funcionários selecionados
      if (selectedEmployees.length > 0) {
        await Promise.all(
          selectedEmployees.map(async (employee) => {
            const response = await fetch(
              "http://localhost:3001/team/employee-team",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  teamId: teamId,
                  cpf: employee.cpf,
                }),
              }
            );
            if (!response.ok) throw new Error("Erro ao associar funcionário");
          })
        );
      }

      // Fecha o modal após tudo ser concluído
      setIsModalOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddEmployee = () => {
    if (
      selectedEmployee &&
      !selectedEmployees.find((e) => e.cpf === selectedEmployee.cpf)
    ) {
      setSelectedEmployees((prev) => [...prev, selectedEmployee]);
      setSelectedEmployee(null); // Limpa a seleção após adicionar
    }
  };

  const handleChanger = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const filteredEmployees =
    selectedFilter === "none"
      ? employeeList
      : employeeList.filter((employee) => employee.role === selectedFilter);

  return (
    <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-10 px-4 sm:px-0">
      <div className="custom-scrollbar bg-bg-page-950 relative rounded-md shadow-lg p-6 flex flex-col max-w-2xl text-sm sm:text-base w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-white">Criar Equipe</h2>
          <button
            className="absolute -top-4 -right-4 z-20 bg-white rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <IoCloseCircle
              className="fill-cancel-color-700 hover:fill-cancel-color-900 transition-all"
              size={35}
            />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex gap-4 items-end flex-col sm:flex-row">
            <InputComponent
              value={formData.name}
              onChange={handleChanger}
              enabled={isSelectDisable}
              label="Nome da equipe"
              placeholder="Digite o nome da equipe"
              type="text"
              name="name"
            />
            <InputComponent
              value={formData.description}
              onChange={handleChanger}
              enabled={isSelectDisable}
              label="Descrição da equipe"
              placeholder="Ex:. Equipe de dev"
              type="text"
              name="description"
            />
            <div className="w-full">
              <ButtonDefault
                text="Cadastrar"
                enabled={isSelectDisable}
                type="submit"
              />
            </div>
          </div>

          {isTeamCreated && (
            <div className="w-full flex gap-4 flex-col">
              <h1 className="text-xl">Cadastro de funcionário</h1>

              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex w-full sm:w-fit flex-col gap-2">
                  <span className="text-sm">Função:</span>
                  <select
                    disabled={isSelectDisable}
                    value={selectedFilter}
                    onChange={(e) =>
                      setSelectedFilter(e.target.value as FilterType)
                    }
                    className="py-2.5 px-4 w-full sm:w-60 rounded-md outline-none text-black focus:outline-orange-500"
                  >
                    <option value="none" className="text-gray-600">
                      Selecione a função
                    </option>
                    <option value="DesenvolvedorFrontEnd">
                      Desenvolvedor FrontEnd
                    </option>
                    <option value="DesenvolvedorBackEnd">
                      Desenvolvedor BackEnd
                    </option>
                    <option value="UIUXDesigner">UI/UX Designer</option>
                    <option value="QA">QA</option>
                  </select>
                </div>

                <SelectEmployee
                  disable={selectedFilter === "none"}
                  employeeList={filteredEmployees}
                  setSelectedEmployee={setSelectedEmployee} // Passa a função para atualizar o estado
                />

                <ButtonDefault
                  text="Aplicar"
                  enabled={!!selectedEmployee}
                  onClick={handleAddEmployee}
                  type="button"
                />
              </div>

              {selectedEmployees.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg mb-2">Funcionários Adicionados:</h3>
                  <ul className="space-y-2">
                    {selectedEmployees.map((employee) => (
                      <li
                        key={employee.cpf}
                        className="flex justify-between items-center bg-gray-800 p-2 rounded"
                      >
                        <span>{employee.name}</span>
                        <span className="text-gray-400">{employee.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="w-full flex justify-end">
                <ButtonDefault
                  text="Criar"
                  enabled={selectedEmployees.length > 0}
                  onClick={handleCreateTeam}
                  type="button"
                />
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
