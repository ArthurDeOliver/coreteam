import prisma from "../prismaClient";

//get, post, put, delete

export class TeamModel {
  static async getAllTeam() {
    return prisma.team.findMany();
  }

  static async getTeamById(id: number) {
    return prisma.team.findFirst({ where: { id } });
  }

  static async createTeam(name: string, description: string) {
    return prisma.team.create({ data: { name, description } });
  }

  static async updateTeam(id: number, name: string, description: string) {
    return prisma.team.update({ where: { id }, data: { name, description } });
  }

  static async deleteTeam(id: number) {
    return prisma.team.delete({ where: { id } });
  }
}
