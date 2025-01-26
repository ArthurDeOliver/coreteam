import express from "express";
import EmployerRouter from "./routes/EmployeeRouter";

const app = express(); //criando uma instância do express
const PORT = 3001; //porta do servidor
app.use(express.json()); //middleware para o express entender json

//rotas
app.use("/employee", EmployerRouter); //usando o router

app.listen(PORT, () => {
  //iniciando o servidor
  //servidor ouvindo na porta 3001
  console.log(`Server running on port http://localhost:${PORT}`);
});
