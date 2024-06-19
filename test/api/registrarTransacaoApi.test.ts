import axios from "axios";
import TransacaoItem from "../fake/TransacaoItem";

const baseURL = "http://localhost:3030";

test("Registrar transicao financeira", async () => {
  const transacaoItem = new TransacaoItem();
  const item = transacaoItem.item();

  const response = await axios.post(`${baseURL}/transacoes`, item);

  expect(response.status).toEqual(201);
});
