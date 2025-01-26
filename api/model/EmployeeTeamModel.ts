import prisma from "../prismaClient";

export class EmployeeTeamModel {
  static async createEmployeeTeam(employeeCpf: string, teamId: number) {
    return prisma.employeeTeam.create({ data: { employeeCpf, teamId } });
  }

  static async getEmployeeTeamById(teamId: number) {
    return prisma.employeeTeam.findMany({ where: { teamId } });
  }

  static async deleteEmployeeTeam(employeeCpf: string, teamId: number) {
    return prisma.employeeTeam.deleteMany({ where: { employeeCpf, teamId } });
  }
}
