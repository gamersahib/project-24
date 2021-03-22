const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,bin;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,30,30);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper,paper.position{x:85,y:-85})
  }
}
