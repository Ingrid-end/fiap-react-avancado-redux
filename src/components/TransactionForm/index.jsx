import { useState } from "react";
import { Card, Form, Heading, Input, Label, Select } from "./styles";
import { Button } from "../Button";
import { addTransactions } from "../../features/transactions/transactionSlice";
import { useDispatch, useSelector } from "react-redux";

export const TransactionForm = () => {
  const [transactionType, setTransactionType] = useState("");
  const [transactionValue, setSetTransactionValue] = useState("");
  // resultado de invocar um hook
  const dispatch = useDispatch();

  const createTransacion = (evt) => {
    evt.preventDefault();

    // não pode chamar a ação direto - então precisa usar o dispatch (ser responsavel pelo estado)
    dispatch(
      addTransactions({
        value: parseFloat(transactionValue),
        type: transactionType,
      })
    );
  };

  // useSelector hook do redux
  // state é o estado global
  // transactionTypes é o slice que contém os tipos de transação que são os types
  const transactionTypes = useSelector((state) => state.transactionTypes.types);

  return (
    <Card>
      <Heading>Nova transação</Heading>
      <Form onSubmit={createTransacion}>
        <Select
          value={transactionType}
          onChange={(evt) => setTransactionType(evt.target.value)}
          required
        >
          <option value="" disabled hidden>
            Selecione o tipo de transação
          </option>
          {/* passando os valores do redux */}
          {transactionTypes.map((t) => (
            <option value={t} key={t}>
              {t}
            </option>
          ))}
        </Select>
        <div>
          <Label>Valor</Label>
          <Input
            placeholder="00,00"
            type="number"
            value={transactionValue}
            onChange={(evt) => setSetTransactionValue(evt.target.value)}
            required
          />
        </div>
        <Button>Concluir transação</Button>
      </Form>
    </Card>
  );
};
