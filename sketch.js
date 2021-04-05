var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){


}

	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
bob1 = new bob(310, 260, 20);
bob2 = new bob(410, 260, 20)
bob3 = new bob(510, 260, 20);
bob4 = new bob(610, 260, 20);                                                                                                                                                        
bob5 = new bob(710, 260, 20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}
