
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2

	}
	//Create the Bodies Here.
 ball = Bodies.circle(100,100,40,ball_options);
 World.add(world,ball);

 groundObj = new Ground(400,370,width,20);
 //leftSide = new Ground(1100,300,20,120);

	Engine.run(engine);

	ball.debug = true;
	groundObj.debug = true;

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,10);

  groundObj.display();
  //leftSide.display();
  //rightSide.display();
  

  Engine.update(engine);
 
}



