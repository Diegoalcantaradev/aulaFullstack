import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORTA;
app.use(express.json());
app.listen(port, () => {
  console.log("meu servidor está escutando na porta " + port);
});
