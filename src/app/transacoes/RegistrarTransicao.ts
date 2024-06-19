import Id from "../shared/Id";
import RegistrarTransicaoPorta from "./RegistrarTransicao.porta";
import Transicao from "./Transicao.interface";

export default class RegistrarTransicao {
  constructor(private registrarTransacao: RegistrarTransicaoPorta) {}

  async executar(transacao: Transicao): Promise<Transicao> {
    const transicao = {
      descricao: transacao.descricao,
      created_at: transacao.created_at,
      tipo: transacao.tipo,
      valor: transacao.valor,
      status: transacao.status,
      id: Id.generate(),
    };

    this.registrarTransacao.inserir(transicao);
    return transacao;
  }
}
