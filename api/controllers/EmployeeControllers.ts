import { EmployeeModel } from "../model/EmployeeModel";
import { Request, Response } from "express";

export class EmployeeController {
  // Buscar todos os funcionários
  static async getEmployees(req: Request, res: Response) {
    try {
      const employees = await EmployeeModel.getAllEmployees();
      res.status(200).json(employees);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
      res.status(500).json({
        message: "Erro ao buscar funcionários. Tente novamente mais tarde.",
      });
    }
  }

  // Buscar funcionários por cargo
  static async getEmployeesByRole(req: Request, res: Response) {
    try {
      const { role } = req.params;
      if (!role) {
        return res
          .status(400)
          .json({ message: "O cargo (role) é obrigatório." });
      }

      const employees = await EmployeeModel.getEmployeesByRole(role);
      res.status(200).json(employees);
    } catch (error) {
      console.error("Erro ao buscar funcionários por cargo:", error);
      res
        .status(500)
        .json({ message: "Erro ao buscar funcionários por cargo." });
    }
  }

  // Criar um novo funcionário
  static async createEmployee(req: Request, res: Response) {
    try {
      const { name, role, salary, cpf } = req.body;

      const newEmployee = await EmployeeModel.createEmployee(
        cpf,
        name,
        salary,
        role
      );
      res.status(201).json(newEmployee);
    } catch (error) {
      console.error("Erro ao criar funcionário:", error);
      res.status(500).json({
        message: "Erro ao criar funcionário. Tente novamente mais tarde.",
      });
    }
  }

  // Atualizar um funcionário
  static async updateEmployee(req: Request, res: Response) {
    try {
      const { cpf } = req.params;
      const { name, salary, role } = req.body;

      const updatedEmployee = await EmployeeModel.updateEmployee(cpf, {
        name,
        salary,
        role,
      });
      res.status(200).json(updatedEmployee);
    } catch (error) {
      console.error("Erro ao atualizar funcionário:", error);
      res.status(500).json({ message: "Erro ao atualizar funcionário." });
    }
  }

  // Excluir um funcionário
  static async deleteEmployee(req: Request, res: Response) {
    try {
      const { cpf } = req.params;

      await EmployeeModel.deleteEmployee(cpf);
      res.status(200).json({ message: "Funcionário excluído com sucesso." });
    } catch (error) {
      console.error("Erro ao excluir funcionário:", error);
      res.status(500).json({ message: "Erro ao excluir funcionário." });
    }
  }

  // Atribuir um funcionário a uma equipe
  static async assignEmployeeToTeam(req: Request, res: Response) {
    try {
      const { cpf } = req.params;
      const { teamId } = req.body;

      const updatedEmployee = await EmployeeModel.assignEmployeeToTeam(
        cpf,
        teamId
      );
      res.status(200).json(updatedEmployee);
    } catch (error) {
      console.error("Erro ao atribuir funcionário a equipe:", error);
      res.status(500).json({
        message:
          "Erro ao atribuir funcionário a equipe. Tente novamente mais tarde.",
      });
    }
  }

  // Remover um funcionário de uma equipe
  static async removeEmployeeFromTeam(req: Request, res: Response) {
    try {
      const { cpf } = req.params;

      const updatedEmployee = await EmployeeModel.removeEmployeeFromTeam(cpf);
      res.status(200).json(updatedEmployee);
    } catch (error) {
      console.error("Erro ao remover funcionário de equipe:", error);
      res.status(500).json({
        message:
          "Erro ao remover funcionário de equipe. Tente novamente mais tarde.",
      });
    }
  }

  // Buscar um funcionário específico pelo CPF
  static async getEmployeeByCpf(req: Request, res: Response) {
    try {
      const { cpf } = req.params;

      const employee = await EmployeeModel.getEmployeeByCpf(cpf);

      res.status(200).json(employee);
    } catch (error) {
      console.error("Erro ao buscar funcionário pelo CPF:", error);
      res.status(500).json({
        message:
          "Erro ao buscar funcionário pelo CPF. Tente novamente mais tarde.",
      });
    }
  }
}
