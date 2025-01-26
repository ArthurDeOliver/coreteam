import { Request, Response } from "express";
import { EmployeeTeamModel } from "../model/EmployeeTeamModel";

export class EmployeeTeamController {
  static async createEmployeeTeam(req: Request, res: Response) {
    try {
      const { employeeCpf } = req.body;
      const { teamId } = req.body;

      const employerTeam = await EmployeeTeamModel.createEmployeeTeam(
        employeeCpf,
        Number(teamId)
      );
      res.status(200).json(employerTeam);
    } catch (e) {
      res.status(500).json({ message: "Erro ao criar time de funcionários" });
    }
  }

  static async getEmployeeTeamById(req: Request, res: Response) {
    try {
      const { teamId } = req.params;
      const employeeTeam = await EmployeeTeamModel.getEmployeeTeamById(
        Number(teamId)
      );
      res.status(200).json(employeeTeam);
    } catch (e) {
      res.status(500).json({ message: "Erro ao buscar time de funcionários" });
    }
  }

  static async deleteEmployeeTeam(req: Request, res: Response) {
    try {
      const { employeeCpf, teamId } = req.body;
      const employeeTeamDeleted = await EmployeeTeamModel.deleteEmployeeTeam(
        employeeCpf,
        Number(teamId)
      );
      res.status(200).json(employeeTeamDeleted);
    } catch (e) {
      res.status(500).json({ message: "Erro ao deletar time de funcionários" });
    }
  }
}
