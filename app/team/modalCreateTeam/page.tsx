"use client";
import { useEffect, useState } from "react";
import { ButtonDefault } from "@/app/components/button/buttonDefault/page";
import { InputComponent } from "@/app/components/input/page";
import { RoleSelect } from "../selectRole/page";
import { IoCloseCircle } from "react-icons/io5";
import { EmployeeSelect } from "../selectEmployee/page";

interface Employee {
  cpf: string;
  name: string;
  role: string;
  salary: string;
}

interface ModalComponentProps {
  setIsModalOpen: (value: boolean) => void;
}

export const ModalCreateTeam = ({ setIsModalOpen }: ModalComponentProps) => {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [employeeListFiltered, setEmployeeListFiltered] = useState<Employee[]>(
    []
  );
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    employees: [] as string[], // Agora armazena apenas CPFs
  });
  const [isEmployeeApplied, setIsEmployeeApplied] = useState<boolean>(false);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:3001/employee");
      const employeesData: Employee[] = await response.json();
      setEmployeeList(employeesData);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    selectedRole
      ? setEmployeeListFiltered(
          employeeList.filter((emp) => emp.role === selectedRole)
        )
      : setEmployeeListFiltered(employeeList);
  }, [selectedRole, employeeList]);

  const handleAddEmployee = () => {
    if (
      selectedEmployee &&
      !formData.employees.includes(selectedEmployee.cpf) // Verifica se o CPF já existe
    ) {
      setFormData((prev) => ({
        ...prev,
        employees: [...prev.employees, selectedEmployee.cpf], // Adiciona apenas o CPF
      }));
      setIsEmployeeApplied(true);
      setTimeout(() => setIsEmployeeApplied(false), 1000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleSelectEmployee = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const employee =
      employeeListFiltered.find((emp) => emp.cpf === e.target.value) || null;
    setSelectedEmployee(employee);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          employees: formData.employees, // Mapeia CPFs para o formato esperado pelo backend
        }),
      });
      console.log(formData);
      if (response.ok) {
        setIsModalOpen(false);
      } else {
        console.error("Erro ao cadastrar equipe");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-10 px-4 sm:px-0">
      <div className="bg-white relative rounded-lg shadow-lg p-6 flex flex-col max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Criar equipe</h2>
          <button
            className="absolute -top-4 -right-4 bg-white rounded-full hover:bg-gray-100"
            onClick={() => setIsModalOpen(false)}
          >
            <IoCloseCircle
              className="text-red-600 hover:text-red-700"
              size={35}
            />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="w-full flex gap-6 flex-col sm:flex-row">
            <InputComponent
              maxLength={20}
              value={formData.name}
              onChange={handleChange}
              enabled={true}
              label="Nome da equipe"
              placeholder="Digite o nome da equipe"
              type="text"
              name="name"
            />
            <InputComponent
              maxLength={50}
              value={formData.description}
              onChange={handleChange}
              enabled={true}
              label="Descrição da equipe"
              placeholder="Digite a descrição da equipe"
              type="text"
              name="description"
            />
          </div>

          <span className="text-xl text-gray-900">Adicionar funcionário</span>
          <div className="w-full flex gap-3 items-end flex-col sm:flex-row">
            <RoleSelect enable={true} onChange={handleSelectRole} name="role" />
            <EmployeeSelect
              onChange={handleSelectEmployee}
              employeeList={employeeListFiltered}
            />
            <div className="flex flex-col w-full sm:w-auto">
              <ButtonDefault
                text="Aplicar"
                enable={true}
                onClick={handleAddEmployee}
                type="button"
              />
            </div>
          </div>
          {isEmployeeApplied ? (
            <p className="text-green-700 bg-green-200 w-full px-4 py-3 rounded-lg font-semibold text-lg mt-1">
              Funcionário Aplicado! ✅
            </p>
          ) : (
            <p className="text-gray-600 bg-gray-200 w-full px-4 py-3 rounded-lg  text-lg mt-1">
              Status da aplicação
            </p>
          )}
          <div className="w-full">
            <ButtonDefault text="Criar equipe" enable={true} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
