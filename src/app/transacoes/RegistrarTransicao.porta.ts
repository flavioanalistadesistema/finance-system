import Transicao from "./Transicao.interface";

export default interface RegistroTransicaoPorta {
  inserir(transicao: Transicao): Promise<void>;
}
