import RegistroTransicaoPorta from "../../app/transacoes/RegistrarTransicao.porta";
import Transicao from "../../app/transacoes/Transicao.interface";

export default class TransicaoFake implements RegistroTransicaoPorta {
  private static transicoes: Transicao[] = [];

  async inserir(transicao: Transicao): Promise<void> {
    TransicaoFake.transicoes.push(transicao);
  }
}
