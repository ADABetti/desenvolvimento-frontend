// Arquivo compilado do TS:

var Pessoa = /** @class */ (function () {
  function Pessoa(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  }
  Object.defineProperty(Pessoa.prototype, "nome", {
    get: function () {
      return this._nome;
    },
    set: function (nome) {
      this._nome = nome;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Pessoa.prototype, "idade", {
    get: function () {
      return this._idade;
    },
    set: function (idade) {
      this._idade = idade;
    },
    enumerable: false,
    configurable: true,
  });
  return Pessoa;
})();
