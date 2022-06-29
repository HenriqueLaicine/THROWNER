const World = Matter.World;
const Engine = Matter.World;
const Bodies = Matter.World;
const Constraint = Matter.World;
var jogador;
var chaoInvisivel;

function preload(){
//subir imagens (de tarefa, subir a de fundo)
}

function setup(){
    createCanvas(800,600);
    //create sprite peronagem (se já tiver um sprite pra ele, colocar)
    jogador = createSprite(100,525,20,20);
    //chão anti-quedas
    chaoInvisivel = createSprite(400,550,800,5);
    chaoInvisivel.visible = false;
}

function draw(){
    background(200);

    if(keyDown("w")){
        jogador.velocityY = -10;
    }

    if(keyDown("a")){
        jogador.velocityX = -10;
    }

    if(keyDown("d")){
        jogador.velocityX = 10;
    }

    jogador.velocityY += 0.5;

    jogador.collide(chaoInvisivel);

    drawSprites();
}