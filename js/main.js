/* Feito por Osmar Januario de souza Neto */

// Variáveis
let Canvas = document.getElementById('cobrinha');
let Context = Canvas.getContext("2d"); // Reindenização do canvas
let box = 32;
let Cobrinha = [];

Cobrinha[0] = {
    x: 12 * box,
    y: 8 * box
}

let Direction = "right";

// Função que cria o background
function CriarBG() {
    Context.fillStyle = "#45a836";
    Context.fillRect(0, 0, 26 * box, 16 * box);
}

// Função que cria cobrinha
function CriarCobrinha() {
    for(I=0; I < Cobrinha.length; I++){
        Context.fillStyle = "#111";
        Context.fillRect(Cobrinha[I].x, Cobrinha[I].y, box, box);
    }
}

function IniciarJogo() {
    CriarBG();
    CriarCobrinha();

    let CobrinhaX = Cobrinha[0].x;
    let CobrinhaY = Cobrinha[0].y;

    if(Direction == "right") CobrinhaX += box;
    if(Direction == "left") CobrinhaX -= box;
    if(Direction == "up") CobrinhaY -= box;
    if(Direction == "Down") CobrinhaY += box;

    Cobrinha.pop();

    let NovaCabeca = {
        x: CobrinhaX,
        y: CobrinhaY
    }

    Cobrinha.unshift(NovaCabeca);
}

let Jogo = setInterval(IniciarJogo, 100);