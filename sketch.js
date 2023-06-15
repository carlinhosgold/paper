
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane,block1,block2,rotator1,rotator2,rotator3,angle1=60,angle2=60,angle3=60,particle1,particle2,particle3;

function preload()
{
	
}

function setup() {
	createCanvas(600,500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
var plane_options = {isStatic:true};

plane = Bodies.rectangle(200,500,1000,20,plane_options);
World.add(world,plane);

block1 = Bodies.rectangle(210,300,130,20,plane_options);
World.add(world,block1);

block2 = Bodies.rectangle(410,300,130,20,plane_options);
World.add(world,block2);

rotator1 = Bodies.rectangle(300,150,90,20,plane_options);
World.add(world,rotator1);

rotator2 = Bodies.rectangle(300,150,90,20,plane_options);
World.add(world,rotator2);

rotator3 = Bodies.rectangle(300,150,90,20,plane_options);
World.add(world,rotator3);

var particle_options = {
  restitution:0.4,
  friction:0.02
}

particle1 = Bodies.circle(290,20,10,particle_options);
World.add(world,particle1);

particle2 = Bodies.circle(265,20,10,particle_options);
World.add(world,particle2);

particle3 = Bodies.circle(280,20,10,particle_options);
World.add(world,particle3);

particle4 = Bodies.circle(260,20,10,particle_options);
World.add(world,particle4);

particle5 = Bodies.circle(300,20,10,particle_options);
World.add(world,particle5);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(73);
  
Engine.update(engine);

fill("red");
rect(plane.position.x,plane.position.y,1000,20);

rect(block1.position.x,block1.position.y,130,20);

rect(block2.position.x,block2.position.y,130,20);

Matter.Body.rotate(rotator1,angle1);
push();
translate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,130,20);
pop();
angle1+=3;

Matter.Body.rotate(rotator2,angle2);
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,130,20);
pop();
angle2+=5;

Matter.Body.rotate(rotator3,angle3);
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(0,0,130,20);
pop();
angle3+=7;

fill("yellow");
ellipse(particle1.position.x,particle1.position.y,10);

ellipse(particle2.position.x,particle2.position.y,10);

ellipse(particle3.position.x,particle3.position.y,10);

ellipse(particle4.position.x,particle4.position.y,10);

ellipse(particle5.position.x,particle5.position.y,10);


  drawSprites();
 
}



