/* Feito por Osmar Januario de souza Neto */

// Variáveis
let Canvas = document.getElementById('cobrinha');
let Context = Canvas.getContext("2d"); // Reindenização do canvas.
let box = 32;
let Cobrinha = [];

Cobrinha[0] = {
    x: 12 * box,
    y: 8 * box
}

let Direction = "right";

// Função que cria o background.
function CriarBG() {
    Context.fillStyle = "#45a836";
    Context.fillRect(0, 0, 26 * box, 16 * box);
}

// Função que cria cobrinha.
function CriarCobrinha() {
    for(I=0; I < Cobrinha.length; I++){
        Context.fillStyle = "#111";
        Context.fillRect(Cobrinha[I].x, Cobrinha[I].y, box, box);
    }
}

function Update(event) { // Função para fazer update da direção.
    if(event.keyCode == 37 && Direction != "right") Direction = "left";
    if(event.keyCode == 38 && Direction != "down") Direction = "up";
    if(event.keyCode == 39 && Direction != "left") Direction = "right";
    if(event.keyCode == 40 && Direction != "up") Direction = "down";
}

document.addEventListener('keydown', Update); // Chamando função Update e mandando a tecla apertada.

function IniciarJogo() { // Função que inicia o jogo.
    if(Cobrinha[0].x > 25 * box && Direction == "right") Cobrinha[0].x = 0;
    if(Cobrinha[0].x < 0 && Direction == "left") Cobrinha[0].x = 26 * box;
    if(Cobrinha[0].y > 15 * box && Direction == "down") Cobrinha[0].y = 0;
    if(Cobrinha[0].y < 0 && Direction == "up") Cobrinha[0].y = 16 * box;

    CriarBG();
    CriarCobrinha();

    let CobrinhaX = Cobrinha[0].x;
    let CobrinhaY = Cobrinha[0].y;

    if(Direction == "right") CobrinhaX += box;
    if(Direction == "left") CobrinhaX -= box;
    if(Direction == "up") CobrinhaY -= box;
    if(Direction == "down") CobrinhaY += box;

    Cobrinha.pop();

    let NovaCabeca = {
        x: CobrinhaX,
        y: CobrinhaY
    }

    Cobrinha.unshift(NovaCabeca);
}

let Jogo = setInterval(IniciarJogo, 100); // Chamando função num intervalo de 100 milisengundos (velocidade da cobrinha).