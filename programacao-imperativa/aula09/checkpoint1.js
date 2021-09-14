
function login(senha) {
    if (senha == 1234) {
        return console.log("ACESSO PERMITIDO");
    }
    else {
        return console.log("ACESSO NEGADO");
    }

}

login(1234);

function tamanho(a, b) {
    if (a > b) {
        return console.log(a, "é maior que", b);
    } else if (a < b) {
        return console.log(a, "é menor que", b);
    } else {
    return console.log(a, "é igual a", b);
    }
}

tamanho(5, 15);

let mes = 9;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
}

let senhaRapida = 1234
senhaRapida == 1234 ? console.log("ACESSO PERMITIDO") : console.log("ACESSO NEGADO");