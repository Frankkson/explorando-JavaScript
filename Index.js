import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("Alfredo", 11122233309);
const cliente2 = new Cliente("Claudia", 88822233309);

const ContaCorrenteAlfredo = new ContaCorrente(1082, cliente1);
const ContaCorrenteClaudia = new ContaCorrente(1091, cliente2);

ContaCorrenteAlfredo.depositar(500);
ContaCorrenteClaudia.depositar(1000);
ContaCorrenteClaudia.pix(200, ContaCorrenteAlfredo);

console.table(ContaCorrenteAlfredo);
