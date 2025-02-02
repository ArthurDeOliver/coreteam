import express, { Request, Response } from "express";
import { EmployeeController } from "../controllers/EmployeeControllers";

const EmployerRouter = express.Router();

// Buscar todos os funcionários
EmployerRouter.get("/", async (req: Request, res: Response) => {
  try {
    await EmployeeController.getEmployees(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar os funcionários" });
  }
});

// Criar um novo funcionário
EmployerRouter.post("/", async (req: Request, res: Response) => {
  try {
    await EmployeeController.createEmployee(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar funcionário" });
  }
});

// Atualizar um funcionário
EmployerRouter.put("/:cpf", async (req: Request, res: Response) => {
  try {
    await EmployeeController.updateEmployee(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar funcionário" });
  }
});

// Excluir um funcionário
EmployerRouter.delete("/:cpf", async (req: Request, res: Response) => {
  try {
    await EmployeeController.deleteEmployee(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao excluir funcionário" });
  }
});

// Atribuir um funcionário a uma equipe
EmployerRouter.put("/:cpf/assign-team", async (req: Request, res: Response) => {
  try {
    await EmployeeController.assignEmployeeToTeam(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Erro ao atribuir funcionário a equipe. Tente novamente mais tarde.",
    });
  }
});

// Remover um funcionário de uma equipe
EmployerRouter.put("/:cpf/remove-team", async (req: Request, res: Response) => {
  try {
    await EmployeeController.removeEmployeeFromTeam(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Erro ao remover funcionário de equipe. Tente novamente mais tarde.",
    });
  }
});

// Buscar um funcionário específico pelo CPF
EmployerRouter.get("/:cpf", async (req: Request, res: Response) => {
  try {
    await EmployeeController.getEmployeeByCpf(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Erro ao buscar funcionário pelo CPF. Tente novamente mais tarde.",
    });
  }
});

export default EmployerRouter;
