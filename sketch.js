
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;
var object1,object2;

function preload()	{}

function setup() {
	createCanvas(800, 300);
	engine = Engine.create()
    world = engine.world

	var ball_options={
		isStatic:false,
		restitution:1,
        friction:0,
		density:1.2,
	}
	var ground_options={
		isStatic:true,
	}
	

	//Create the Bodies Here.
	ground=Bodies.rectangle(200,290,1200,20,ground_options);
	World.add(world,ground);
	ball=Bodies.circle(150,10,30,ball_options);
	World.add(world,ball);
	//ball.mouseClicked(vforce);
	object1=new Ground(500,270,10,200);
	object2=new Ground(700,270,10,200);
    
	

	Engine.run(engine)
  
}


function draw() {
	background(51);
 Engine.update(engine);
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,1200,20)
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,30,30);
 object1.display();
 object2.display();
	drawSprites();
}
function keyPressed(){
	if(keyCode === 32){
		
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
		
	}
}