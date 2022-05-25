class Aviao {
  constructor (nome, tipo, combustivel) {
      this.nome = nome;
      this.tipo = tipo;
      this.combustivel = combustivel;
  }

  myPlane () {
    return `O avião chama-se ${this.nome}, é do tipo ${this.tipo} e utiliza o combustível ${this.combustivel}`
  }
}

module.exports = {
  Aviao
}