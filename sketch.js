var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1
var rope1

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
  roof1 = new Roof(400,200);
  rope1 = new Rope(bob1.body,{x: 310, y: 200}); 
  rope2 = new Rope(bob2.body,{x: 410, y: 200}); 
  rope3 = new Rope(bob3.body,{x: 510, y: 200}); 
  rope4 = new Rope(bob4.body,{x: 610, y: 200}); 
  rope5 = new Rope(bob5.body,{x: 710, y: 200}); 
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("blue"); 
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
