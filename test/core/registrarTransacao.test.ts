import TransicaoFake from "../../src/adaptadores/db/TransicaoFake";
import TransicaoDB from "../../src/adaptadores/knex/TransicaoDB";
import RegistrarTransacao from "../../src/app/transacoes/RegistrarTransicao";
import TransacaoItem from "../fake/TransacaoItem";

test("Registrar transicao financeira Fake", async () => {
  const portaRegistro = new TransicaoFake();
  const registrarTransacao = new RegistrarTransacao(portaRegistro);

  const itemTransacao = {
    descricao: "Salário",
    created_at: "2021-01-01",
    tipo: "Crédito",
    valor: 1000,
    status: "Concluído",
  };

  const transacao = await registrarTransacao.executar(itemTransacao);

  expect(transacao.descricao).toEqual("Salário");
  expect(transacao.created_at).toEqual("2021-01-01");
});

test("Registrar transicao financeira", async () => {
  const portaRegistro = new TransicaoDB();
  const registrarTransacao = new RegistrarTransacao(portaRegistro);

  const itemTransacao = new TransacaoItem();
  const item = itemTransacao.item();
  const transacao = await registrarTransacao.executar(item);

  expect(transacao.tipo).toEqual("Débito");
  expect(transacao.status).toEqual("Concluído");
});
