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

console.log(mediaDeTresNumeros(2, 4, 6));

console.log(calculaPorcentagem(300, 15));

console.log(geradorDePorcentagem(2, 200));

