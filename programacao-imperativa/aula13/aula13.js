let pais = {
    nome: "Brasil",
    capital: "Brasilia",
    nacionalidade: function () {
        return "Sou do " + this.nome;
    }
};

console.log(pais.nacionalidade());