import express from "express";
import { TeamController } from "../controllers/TeamControllers";

const TeamRouter = express.Router();

TeamRouter.get("/", TeamController.getTeam);
TeamRouter.get("/:id", TeamController.getTeamById);
TeamRouter.post("/", TeamController.createTeam);
TeamRouter.put("/:id", TeamController.updateTeam);
TeamRouter.delete("/:id", TeamController.deleteTeam);

export default TeamRouter;
