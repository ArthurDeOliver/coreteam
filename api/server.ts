import express from "express";

const app = express(); //criando uma instância do express
const PORT = 3001; //porta do servidor
app.use(express.json()); //middleware para o express entender json

app.listen(PORT, () => {
  //servidor ouvindo na porta 3001
  console.log(`Server running on port http://localhost:${PORT}`);
});
