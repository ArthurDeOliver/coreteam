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
      const { name, description, employees } = req.body;
      console.log(req.body);
      // Validação básica
      if (!name) {
        return res.status(400).json({ message: "Nome do time é obrigatório" });
      }

      const newTeam = await TeamModel.createTeam(name, description, employees);

      res.status(201).json({
        message: "Time criado com sucesso.",
        team: newTeam,
      });
    } catch (e) {
      console.error("Erro ao criar time:", e);
      res.status(500).json({
        message:
          "Erro ao criar time. Verifique se os CPFs são válidos e não estão associados a outro time.",
      });
    }
  }
}
