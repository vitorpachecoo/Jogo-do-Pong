//variáveis da bolinha
let xBolinha = 325;
let yBolinha = 325;
let diametro = 25;
let raio = diametro /2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis Raquete P1
let xRaquete = 35;
let yRaquete = 250;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let velocidadeXRaquete;
let velocidadeYRaquete;

let colidiu = false

//Variáveis Raquete P2
let xRaqueteOponente = 755;
let yRaqueteOponente =230;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
//let trilha;

let chanceDeErrar = 0;

function preload(){
  //trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(800, 550);
  //trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || 
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x,y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete(){
    if (keyIsDown("87")){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown("83")){
        yRaqueteOponente += 10;
    }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
      raquetada.play();
    }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(20);
  fill(color(75,0,130));
  stroke(138,43,226);
  rect(175,16, 50, 25);
  fill(255);
  text(meusPontos, 200, 35);
  fill(color(75,0,130));
  stroke(138,43,226);
  rect(575,16, 50, 25);
  fill(255);
  text(pontosOponente, 600, 35);
}

function marcaPonto(){
  if (xBolinha > 790){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}







