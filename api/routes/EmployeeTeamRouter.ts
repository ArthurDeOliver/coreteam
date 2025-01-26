import express from "express";
import { EmployeeTeamController } from "../controllers/EmployeeTeamControllers";

const EmployeeTeamRouter = express.Router();

EmployeeTeamRouter.post("/", EmployeeTeamController.createEmployeeTeam); // Rota para criar um time de funcionários
EmployeeTeamRouter.get("/:teamId", EmployeeTeamController.getEmployeeTeamById); // Rota para get um time de funcionários
EmployeeTeamRouter.delete("/", EmployeeTeamController.deleteEmployeeTeam); // Rota para deletar um funcionários do time

export default EmployeeTeamRouter;
