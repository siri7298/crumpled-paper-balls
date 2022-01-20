
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world
var leftSide
var rightSide
var radius =40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
	isStatic:false,
	restituiton:0.3,
	friction:0,
	density:1.2

	}


	Ground0bg = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120)

	//Create the Bodies Here.
    ball=Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground0bg.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,radius,radius)
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball,{x:0,y:0},{x:80,y:-85})
}
}



