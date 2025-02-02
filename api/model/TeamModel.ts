import prisma from "../prismaClient";

export class TeamModel {
  // Método para obter todos os times com seus respectivos funcionários
  static async getAllTeams() {
    return prisma.team.findMany({
      include: { employees: true }, // Inclui os funcionários relacionados ao time
    });
  }

  // Método para criar um time e associar funcionários
  static async createTeam(
    name: string,
    description?: string,
    employeeCpfs?: string[] // Lista de CPF dos funcionários a serem associados ao time
  ) {
    try {
      return prisma.team.create({
        data: {
          name,
          description,
          employees: {
            connect: employeeCpfs?.map((cpf) => ({ cpf })), // Conectando os funcionários ao time pelo CPF
          },
        },
        include: { employees: true }, // Inclui os funcionários associados no retorno
      });
    } catch (error) {
      console.error("Erro ao criar o time:", error);
      throw new Error("Erro ao criar o time.");
    }
  }
}
