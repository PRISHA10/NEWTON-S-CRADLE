
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var obj1,obj2,obg3,obg4,obg5;
var rooF;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);




	engine = Engine.create();
	world = engine.world;

rooF = new roof(350,100,300,30)
World.add(world,rooF)

	//Create the Bodies Here.
obg1= new Bob(250,300);
obg2= new Bob(300,300);
obg3= new Bob(350,300);
obg4= new Bob(400,300);
obg5= new Bob(450,300);

rope1= new rope(obg1.body,rooF.body,-100,0)
rope2= new rope(obg2.body,rooF.body,-50,0)
rope3= new rope(obg3.body,rooF.body,0,0)
rope4= new rope(obg4.body,rooF.body,+50,0)
rope5= new rope(obg5.body,rooF.body,+100,0)




	Engine.run(engine);
  
}


function draw() {


	background('white');
 Engine.update(engine)

  rooF.display()

  obg1.display()
  obg2.display()
  obg3.display()
  obg4.display()
  obg5.display()

  rope1.display()
  rope2.display()  
  rope3.display()
  rope4.display()
  rope5.display()



  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(obg1.body,obg1.body.position,{x:-730,y:0})	
}
}


