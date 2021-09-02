//criar o arquivo playlist
let playlist = ["heavy metal", "pisadinha", "funk brega", "mpb", "pop", "sertanejo"]

//posicoes -> 0 .. 5 = tamanho 6
console.log(playlist.length)

for (let i = 0; i < playlist.length; i++) {
    console.log("posicao " + i + " estilo " + playlist[i]);
    
}

// de tras pra frente

for (let i = playlist.length-1; i >= 0; i--) {
    console.log("posicao " + i + " estilo " + playlist[i]);
    
}

let index = 0;
while (index < playlist.length) {
    console.log("posicao " + index + " estilo " + playlist[index]);
    index++;

}

do {
    console.log("posicao " + index + " estilo " + playlist[index]);
    index++;
} while (index < playlist.length);

// for (inicio, condicao de parada, mudanca = (incremento/decremento))

// condicao de parada - evitar LOOP INFINITO
// condicao de parada - DELIMITAR O UNIVERSO

// break - PARAR
// break no switch case