var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//ground = new Ground(500,height,1200,20);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	box1 = new side(440, 610, 20, 100, {isStatic:true});
    box2 = new side(640, 610, 20, 100, {isStatic:true});
    box3 = new side(449, 680, 200, 20, {isStatic:true});
	paper1 = new Paper(200, 680, 70, {isStatic:true});

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 keyPressed();

	Engine.run(engine);
  
}


function draw() {
  background(130);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  keyPressed();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85,y:-85});
	}
}



