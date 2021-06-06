var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var object;
var box1,box2,box3;
var box11,box21,box31;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	box11=createSprite(width/2,655,200,20);
	box11.shapeColor="red";
	box21=createSprite(300,height-100,20,110);
	box21.shapeColor="red";
	box31=createSprite(500,height-100,20,110);
	box31.shapeColor="red";

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world,packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    object = Bodies.circle(width/2 ,200 , 10 ,{isStatic:true});
	World.add(world,object);
	box1=Bodies.rectangle(width/2,height-55,100,10,{isStatic:true})
	World.add(world,box1)
	box2=Bodies.rectangle(300,height-100,10,110,{isStatic:true})
	World.add(world,box2)
	box3=Bodies.rectangle(500,height-100,10,110,{isStatic:true})
	World.add(world,box3)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  helicopterSprite.x=object.position.x;
  helicopterSprite.y=object.position.y;
  box11.x=box1.position.x;
  box11.y=box1.position.y;
  box21.x=box2.position.x;
  box21.y=box2.position.y;
  box31.x=box3.position.x;
  box31.y=box3.position.y;
  if(helicopterSprite.y>=500){
	 helicopterSprite.y=500;
	 Body.setVelocity(object,{x:2 ,y:0})
	    
  }
  
 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody,false)
	Body.setStatic(object,false)
    
  }
}




