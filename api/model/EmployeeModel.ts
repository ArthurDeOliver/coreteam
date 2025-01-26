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
}
