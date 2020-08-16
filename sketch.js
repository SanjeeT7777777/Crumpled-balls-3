const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var engine, world;
var paper
var bucketimage
function preload()
{

}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper (200,450,70,70);

	bucket1= new Bucket (1000,600,30,140);
	bucket2 = new Bucket (800,600,30,140);
	bucket3 =new Dustbin (890,570,200,30);
	

	ground1 = new Ground (width/2,670,width,20);

	
	launcher = new Launcher (paper1.body, {x:200 , y:400 });

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  background(255);
  Engine.update(engine);



  paper1.display();

  //bucket1.display();
  //bucket2.display();
  bucket3.display();

  ground1.display();

  launcher.display();

 // KeyPressed();
  
  

 
}

function mouseDragged (){
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}
function mouseReleased (){
    launcher.fly();
}



