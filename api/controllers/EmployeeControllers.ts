import { EmployeeModel } from "../model/EmployeeModel";
import { Request, Response } from "express";

//classe do controller
export class EmployeeController {
  //método para buscar todos os funcionários
  static async getEmployee(req: Request, res: Response) {
    try {
      const employers = await EmployeeModel.getAllEmployee();
      res.status(200).json(employers);
    } catch (e) {
      res.status(500).json({ message: "Erro ao buscar funcionários" });
    }
  }

  static async getEmployeeByRole(req: Request, res: Response) {
    try {
      const { role } = req.params;
      const employers = await EmployeeModel.getEmployeeByRole(role);
      res.status(200).json(employers);
    } catch (e) {
      res.status(500).json({ message: "Erro ao buscar funcionários" });
    }
  }
}
