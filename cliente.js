export class Cliente {
  #cpf;

  get cpf() {
    return this.#cpf;
  }

  get nome() {
    return this.#nome;
  }

  constructor(nome, cpf) {
    this.#cpf = cpf;
    this.#nome = nome;
  }
}
