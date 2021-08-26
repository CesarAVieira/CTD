function login(senha){
    if (senha == 1234) {
        return console.log("ACESSO PERMITIDO");
    }
    else{
        return console.log("ACESSO NEGADO");
    }

}

login(1234);

function tamanho(a, b) {
    if (a > b) {
        return console.log(a, "é maior que", b);
    }else if (a < b) {
            return console.log(a, "é menor que", b);
    }else (a == b)
            return console.log(a, "é igual a", b);
}

tamanho(5, 15);