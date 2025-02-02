import prisma from "../prismaClient";

export class EmployeeModel {
  // Buscar todos os funcionários (com suas equipes)
  static async getAllEmployees() {
    return prisma.employee.findMany({
      include: { team: true },
    });
  }

  // Buscar um funcionário pelo CPF (com sua equipe)
  static async getEmployeeByCpf(cpf: string) {
    return prisma.employee.findUnique({
      where: { cpf },
      include: { team: true },
    });
  }

  // Buscar funcionários pelo cargo (role)
  static async getEmployeesByRole(role: string) {
    return prisma.employee.findMany({
      where: { role },
      include: { team: true },
    });
  }

  // Criar um novo funcionário
  static async createEmployee(
    cpf: string,
    name: string,
    salary: string,
    role: string,
    teamId?: number // Permitir criar o funcionário já associado a uma equipe
  ) {
    return prisma.employee.create({
      data: { cpf, name, salary, role, teamId },
    });
  }

  // Atualizar um funcionário (agora com valores opcionais)
  static async updateEmployee(
    cpf: string,
    data: { name?: string; salary?: string; role?: string; teamId?: number }
  ) {
    const existingEmployee = await prisma.employee.findUnique({
      where: { cpf },
    });
    if (!existingEmployee) throw new Error("Funcionário não encontrado.");

    return prisma.employee.update({ where: { cpf }, data });
  }

  // Excluir um funcionário
  static async deleteEmployee(cpf: string) {
    return prisma.employee.delete({ where: { cpf } });
  }

  // Atribuir um funcionário a uma equipe
  static async assignEmployeeToTeam(cpf: string, teamId: number) {
    return prisma.employee.update({
      where: { cpf },
      data: { teamId },
    });
  }

  // Remover um funcionário de uma equipe (definir teamId como NULL)
  static async removeEmployeeFromTeam(cpf: string) {
    return prisma.employee.update({
      where: { cpf },
      data: { teamId: null },
    });
  }
}
