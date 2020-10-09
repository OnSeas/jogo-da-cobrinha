/* Feito por Osmar Januario de souza Neto */

let canvas = document.getElementById('snake');
let context = canvas.getContext("2d"); // Reindenização do canvas
let box = 32;

function CriarBG() { // Função que cria o background
    context.fillStyle = "#33cc33";
    context.fillRect(0, 0, 26 * box, 16 * box);
}

CriarBG();