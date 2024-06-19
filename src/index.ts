import dotenv from "dotenv";
dotenv.config();

import express from "express";
import RegistrarTransacaoController from "./controllers/RegistrarTransacaoController";
import RegistrarTransicao from "./app/transacoes/RegistrarTransicao";
import TransicaoDB from "./adaptadores/knex/TransicaoDB";

const app = express();
app.use(express.json());

const registrarTransicaoPorta = new TransicaoDB();
const registrarTransacao = new RegistrarTransicao(registrarTransicaoPorta);
const registrarTransacaoController = new RegistrarTransacaoController(
  app,
  registrarTransacao
);

const porta = process.env.PORTA || 3002;
app.listen(porta, () => {
  console.log(`Server is running on port ${porta}`);
});
