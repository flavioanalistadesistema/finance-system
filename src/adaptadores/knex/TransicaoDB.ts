import RegistroTransicaoPorta from "../../app/transacoes/RegistrarTransicao.porta";
import Transicao from "../../app/transacoes/Transicao.interface";
import conexao from "./conexao";

export default class TransicaoDB implements RegistroTransicaoPorta {
  async inserir(transicao: Transicao): Promise<void> {
    await conexao.table("transacao_financeira").insert(transicao);
  }
}
