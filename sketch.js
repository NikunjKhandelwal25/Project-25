
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground

function preload()
{
	trashImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	var option={
		isStatic:true
	}
	fill("white")
	ball = new paper(300,300,20);
	fill("yellow")
ground= Bodies.rectangle(800,650,1600,20,option)
World.add(world,ground)
	//Create the Bodies Here.
drop1=new drop(1600,1600,0,0);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  rect(ground.position.x,ground.position.y,1600,20)

drop1.display();

if(keyCode===UP_ARROW)
 Matter.Body.applyForce(ball.body,ball.body.position,{x:2,y:-5})
}


