//importando módulos necessários para o desenvolvimento do projeto
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine, world;

//var para o chão
var ground;

//variáveis corda, fruta, restrição
var fruit, rope, rest;

function setup() {
  createCanvas(500, 700);

  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  //ground
  ground = new Ground(200, 680, 600, 20);

  //objeto corda baseado na classe Rope -- professora
  rope = new Rope(10, { x: 245, y: 30 });
  //corpo da fruta (sem classe)-- aluno

  //tornar a fruta parte da composição da corda -- aluno

  //restrição entre a fruta e a corda -- aluno (depois de criar a classe link)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(152, 251, 152);

  Engine.update(engine);

  //exibir a corda -- prof
  rope.show();
  
  //exibir a fruta -- aluno

  //exibir ground
  ground.show();
}
