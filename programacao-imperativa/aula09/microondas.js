const pipoca = 10;
const macarrao = 8;
const carne = 15;
const feijao = 12;
const brigadeiro = 8;
let tempoUsuario = 0;
let tempoPrato
let prato = "Pipoca"
let mensagem

function qualidade(a) {
    if (a < tempoPrato) {
        tempoUsuario = a
        mensagem = "tempo insuficiente";
        return a
    } else if (a < 2 * tempoPrato) {
        tempoUsuario = a
        mensagem = "Prato pronto, bom apetite!!!";
        return a
    } else if (a >= 2 * tempoPrato && a <= 3 * tempoPrato) {
        tempoUsuario = a
        mensagem = "Queimou!";
        return a
    } else {
        tempoUsuario = a
        mensagem = "Kabumm!";
        return a
    }
}

function selecionarPrato(a) {
    if (a == 1) {
        prato = "Pipoca"
        tempoPrato = pipoca
    } else if (a == 2) {
        prato = "Macarrao"
        tempoPrato = macarrao
    } else if (a == 3) {
        prato = "Carne"
        tempoPrato = carne
    } else if (a == 4) {
        prato = "Feijao"
        tempoPrato = feijao
    } else if (a == 5) {
        prato = "Brigadeiro"
        tempoPrato = brigadeiro
    } else {
        return console.log("Prato inexistente");
    }
}

function menu(prato, a) {
    if (prato == "Pipoca") {
        qualidade(a);
        return console.log(mensagem);
    } else if (prato == "Macarrao") {
        qualidade(a);
        return console.log(mensagem);
    } else if (prato == "Carne") {
        qualidade(a);
        return console.log(mensagem);
    } else if (prato == "Feijao") {
        qualidade(a);
        return console.log(mensagem);
    } else if (prato == "Brigadeiro") {
        qualidade(a);
        return console.log(mensagem);
    }
}


selecionarPrato(1)
menu(prato, 20);