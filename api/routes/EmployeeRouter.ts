import express from "express";
import { EmployeeController } from "../controllers/EmployeeControllers";

const EmployerRouter = express.Router();

EmployerRouter.get("/", EmployeeController.getEmployee);
EmployerRouter.get("/:role", EmployeeController.getEmployeeByRole);
EmployerRouter.post("/", EmployeeController.createEmployee);
EmployerRouter.delete("/:cpf", EmployeeController.deleteEmployee);

export default EmployerRouter;
