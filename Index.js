import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./Contas/contaCorrente.js";
import { ContaPoupanca } from "./Contas/contaPoupanca.js";

const cliente1 = new Cliente("Alfredo", 11122233309);

const ContaCorrenteAlfredo = new ContaCorrente(1082, cliente1);

const ContaPoupancaAlfredo = new ContaPoupanca(50, cliente1, 1082);

ContaPoupancaAlfredo.pix(10, ContaCorrenteAlfredo);

console.table(ContaCorrenteAlfredo.cliente);
