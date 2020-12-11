
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(460,50,400,40)
bobDiameter=40
startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	
	
rope1=new Rope(bob1.body,roof.body,-bobDiameter*2, 0)
rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
rope3=new Rope(bob3.body,roof.body,0, 0)
rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0)
rope5=new Rope(bob5.body,roof.body,bobDiameter*2, 0)

constraint1={
	bodyA:bob1.body,
	bodyB:roof.body,
	pointB: {x:-bobDiameter*2, y:0}
}
constraint2={
	bodyA:bob2.body,
	bodyB:roof.body,		
	pointB: {x:-bobDiameter, y:0}
}
constraint3={
	bodyA:bob3.body,
	bodyB:roof.body,		
	pointB: {x:0, y:0}
}
constraint4={
	bodyA:bob4.body,
	bodyB:roof.body,		
	pointB: {x:bobDiameter, y:0}	
}
constraint5={
	bodyA:bob5.body,
	bodyB:roof.body,		
	pointB: {x:bobDiameter*2, y:0}
}
var pendulum1=Constraint.create(constraint1)
var pendulum2=Constraint.create(constraint2)
var pendulum3=Constraint.create(constraint3)
var pendulum4=Constraint.create(constraint4)
var pendulum5=Constraint.create(constraint5)

World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  roof.display()
 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
 
 line(bob1.body.position.x,bob1.body.position.y,roof.body.position.x,roof.body.position.y,)
 line(bob2.body.position.x,bob2.body.position.y,roof.body.position.x,roof.body.position.y,)
 line(bob3.body.position.x,bob3.body.position.y,roof.body.position.x,roof.body.position.y,)
 line(bob4.body.position.x,bob4.body.position.y,roof.body.position.x,roof.body.position.y,)
 line(bob5.body.position.x,bob5.body.position.y,roof.body.position.x,roof.body.position.y,)

}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position
  roofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;
  
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);}


