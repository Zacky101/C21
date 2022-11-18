const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var up_button;

var ground;
var left;
var right;
var top_wall;

var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  up_button = createImg("up.png");
  up_button.position(50,50);
  up_button.size(50,50);
  up_button.mouseClicked(force);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball = Bodies.circle(200,200,20,{isStatic: false,restitution: 0.9});
 
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
}

function force()
{
  Matter.Body.applyForce(ball,{x: 0,y: 0},{x: 0,y: -0.05});
}