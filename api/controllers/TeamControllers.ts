import { Response, Request } from "express";
import { TeamModel } from "../model/TeamModel";

export class TeamController {
  static async getTeam(req: Request, res: Response) {
    try {
      const teams = await TeamModel.getAllTeam();
      res.status(200).json(teams);
    } catch (e) {
      res.status(500).json({ message: "Erro ao buscar times" });
    }
  }

  static async getTeamById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const team = await TeamModel.getTeamById(Number(id));
      res.status(200).json(team);
    } catch (e) {
      res.status(500).json({ message: "Erro ao buscar time" });
    }
  }

  static async createTeam(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      const team = await TeamModel.createTeam(name, description);
      res.status(200).json(team);
    } catch (e) {
      res.status(500).json({ message: "Erro ao criar time" });
    }
  }

  static async updateTeam(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const team = await TeamModel.updateTeam(Number(id), name, description);
      res.status(200).json(team);
    } catch (e) {
      res.status(500).json({ message: "Erro ao atualizar time" });
    }
  }

  static async deleteTeam(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const team = await TeamModel.deleteTeam(Number(id));
      res.status(200).json(team);
    } catch (e) {
      res.status(500).json({ message: "Erro ao deletar time" });
    }
  }
}
