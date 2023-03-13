import { Cliente } from "../cliente";

export class Conta {
  constructor(agencia, cliente, SaldoInicial) {
    if (this.constructor == Conta) {
      throw new Error(
        "Classes abstratas não devem ser instanciadas diretamente."
      );
    }

    this.#agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = SaldoInicial;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.#cliente = novoValor;
    }
  }

  get agencia() {
    return this.#agencia;
  }

  get cliente() {
    return this.#cliente;
  }

  get saldo() {
    return this.#saldo;
  }

  sacar(valor) {
    throw new Error("Métodos abstratos devem ser sobrescritos.");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this.#saldo >= valorSacado) {
      this.#saldo -= valorSacado;
      return valorSacado;
    } else {
      return 0;
    }
    s;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("Transação inválida");
    } else {
      this.#saldo += valor;
    }
  }

  pix(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
