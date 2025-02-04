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
    employees?: string[]
  ) {
    try {
      console.log(employees);
      // Cria o time
      const newTeam = await prisma.team.create({
        data: { name, description },
      });

      // Associa os funcionários ao time
      if (employees && employees.length > 0) {
        const updatedEmployees = await prisma.employee.updateMany({
          where: {
            cpf: {
              in: employees,
            },
          },
          data: {
            teamId: newTeam.id,
          },
        });

        if (updatedEmployees.count === 0) {
          console.warn(
            "Nenhum funcionário foi atualizado. CPFs podem estar errados."
          );
        }
      }

      // Retorna o time com os funcionários associados
      return await prisma.team.findUnique({
        where: { id: newTeam.id },
        include: { employees: true },
      });
    } catch (error) {
      console.error("Erro ao criar o time:", error);
      throw new Error("Erro ao criar o time.");
    }
  }
}
