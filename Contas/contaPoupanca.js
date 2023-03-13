import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
  #saldo;
  #cliente;
  #agencia;

  constructor(agencia, cliente, saldoInicial) {
    super(agencia, cliente, saldoInicial);
  }
}
