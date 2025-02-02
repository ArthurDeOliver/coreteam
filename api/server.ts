import express from "express";
import cors from "cors";

import EmployerRouter from "./routes/EmployeeRouter";
import TeamRouter from "./routes/TeamRoutes";

const app = express(); //criando uma instância do express
const PORT = 3001; //porta do servidor
app.use(cors());
app.use(express.json()); //middleware para o express entender json

//rotas
app.use("/employee", EmployerRouter); //router employee
app.use("/team", TeamRouter); //router employee

//iniciando o servidor
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`); //servidor ouvindo na porta 3001
});
