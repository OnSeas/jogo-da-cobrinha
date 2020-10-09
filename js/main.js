/* Feito por Osmar Januario de souza Neto */

// Variáveis
let canvas = document.getElementById('cobrinha');
let context = canvas.getContext("2d"); // Reindenização do canvas
let box = 32;
let Cobrinha = [];

Cobrinha[0] = {
    x: 10 * box,
    y: 8 * box
}


// Função que cria o background
function CriarBG() {
    context.fillStyle = "#45a836";
    context.fillRect(0, 0, 26 * box, 16 * box);
}

// Função que cria cobrinha
function CriarCobrinha() {
    for(I=0; I < Cobrinha.length; I++){
        context.fillStyle = "#111";
        context.fillRect(Cobrinha[I].x, Cobrinha[I].y, box, box);
    }
}

CriarBG();
CriarCobrinha();