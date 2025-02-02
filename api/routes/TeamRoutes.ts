import express, { Request, Response } from "express";
import { TeamController } from "../controllers/TeamControllers";

const TeamRouter = express.Router();

TeamRouter.get("/", async (req: Request, res: Response) => {
  try {
    await TeamController.getTeam(req, res);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erro ao buscar as equipes" });
  }
});

TeamRouter.post("/", async (req: Request, res: Response) => {
  try {
    await TeamController.createTeam(req, res);
  } catch (e) {
    res.status(500).json({ message: "Erro ao criar equipe" });
  }
});

export default TeamRouter;
