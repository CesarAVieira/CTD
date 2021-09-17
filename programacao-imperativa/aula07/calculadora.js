function adicionar(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

function quadradoDoNumero(a){
    return multiplicacao(a, a);
}

function mediaDeTresNumeros(a, b, c){
    let soma = adicionar(a, b + c);
    return divisao(soma, 3);
}

function calculaPorcentagem(a, b){
    return multiplicacao(a, divisao(b, 100));
}

function geradorDePorcentagem(a, b){
    return multiplicacao(divisao(a, b), 100);
}

console.log("---------- Teste de Operacoes / Calculadora ----------");

console.log(adicionar(2, 2), subtracao(50, 10));

console.log(multiplicacao(9, 9));

console.log(divisao(100, 2));

console.log(divisao(0, 6));

console.log(quadradoDoNumero(8));

console.log(mediaDeTresNumeros(20, 40, 140));

console.log(calculaPorcentagem(300, 15));

console.log(geradorDePorcentagem(2, 200));

let valor1 = 10;
let valor2 = valor1 / 3;
let valor3 = valor2 * 3;
valor1 = valor1 % 2 + 5;
valor1 = valor1 / 2;

if (valor1 != 20) {
    valor1 = 20;
    valor2 = valor2 * valor2;
    }else {
    valor1 = valor1 - 1;
}

console.log("valor1:", valor1, "valor2:", valor2, "valor3", valor3);
