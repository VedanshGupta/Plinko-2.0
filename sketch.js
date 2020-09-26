const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

var score = 0;

var particle;

var turn = 0;

var gameState = start;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 470, 500, 10);

  particle = new Particles(240, 10, 20);

  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 0; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 30; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 45; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j, 375));
  }

  if(frameCount % 60 === 0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10));
  }

function draw() {
  background(0);  
  
  ground.display();

  textSize = 15;
  text("Score:"+score, 50, 10);

  text("500", 85, height-divisionHeight/2);

  text("500", 165, height-divisionHeight/2);

  text("500", 245, height-divisionHeight/2);
  
  text("500", 325, height-divisionHeight/2);

  text("100", 405, height-divisionHeight/2);

  text("100", 485, height-divisionHeight/2);

  text("100", 565, height-divisionHeight/2);

  text("200", 645, height-divisionHeight/2);

  text("200", 725, height-divisionHeight/2);

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 15; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 30; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 45; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  if(particle!==null){
    particle.display();

    if(particle.position.y>760){
      if(particle.position.x<300){
    score = score+500;
    particle = null;
  }
    }

  if(particle.position.x>301 && particle.position.x<600){
    score = score+100;
    particle = null;
  }

  if(particle.position.x>601 && particle.position.x<900){
    score = score+200;
    particle = null;
  
    }
  }
  }

  if(turn === 5){
    gameState = "end";
    textSize = 30;
    text("Game Over!!");
  }
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particles(mouseX, 10, 10, 10);
  }
}
