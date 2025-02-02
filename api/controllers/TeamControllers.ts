import { TeamModel } from "../model/TeamModel";
import { Request, Response } from "express";

export class TeamController {
  // Método para buscar todos os times e seus respectivos funcionários
  static async getTeam(req: Request, res: Response) {
    try {
      const teams = await TeamModel.getAllTeams();
      res.status(200).json(teams);
    } catch (e) {
      console.error("Erro ao buscar equipes:", e);
      res.status(500).json({
        message: "Erro ao buscar equipes. Tente novamente mais tarde.",
      });
    }
  }

  // Método para criar um time e associar funcionários
  static async createTeam(req: Request, res: Response) {
    try {
      const { name, description, employeeCpfs } = req.body;

      // Criação do time
      const newTeam = await TeamModel.createTeam(
        name,
        description,
        employeeCpfs
      );

      res.status(201).json({
        message: "Time criado com sucesso.",
        team: newTeam,
      });
    } catch (e) {
      console.error("Erro ao criar time:", e);
      res.status(500).json({
        message: "Erro ao criar time. Tente novamente mais tarde.",
      });
    }
  }
}
