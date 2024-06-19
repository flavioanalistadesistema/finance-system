import RegistrarTransicao from "../app/transacoes/RegistrarTransicao";
import { Express } from "express";

export default class RegistrarTransacaoController {
  constructor(
    private provedor: Express,
    private registrarTransacao: RegistrarTransicao
  ) {
    this.provedor.post("/transacoes", async (req, res) => {
      try {
        const transacao = await this.registrarTransacao.executar(req.body);
        res.status(201).json(transacao);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    });
  }
}
