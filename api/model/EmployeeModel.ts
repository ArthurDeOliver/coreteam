import prisma from "../prismaClient";

//apenas get all employee e get employee by cpf
export class EmployeeModel {
  // Método para buscar todos os funcionários
  static async getAllEmployee() {
    return prisma.employee.findMany();
  }

  // Método para buscar um funcionário pelo role
  static async getEmployeeByRole(role: string) {
    return prisma.employee.findMany({ where: { role } });
  }

  static async createEmployee(
    cpf: string,
    name: string,
    salary: number,
    role: string
  ) {
    return prisma.employee.create({ data: { cpf, name, salary, role } });
  }

  static async deleteEmployee(cpf: string) {
    return prisma.employee.delete({ where: { cpf } });
  }
}
