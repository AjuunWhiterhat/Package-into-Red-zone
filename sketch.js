
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var verti1,verti2;
var hori1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    helicopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png")
}

function setup() {
    var canvas =createCanvas(800, 700);
  rectMode(CENTER);
  
  packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG);
    helicopterSprite.scale=0.6;
    
    engine = Engine.create();
    world = engine.world;

    packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.6});
    World.add(world, packageBody);
    Matter.Body.setStatic(packageBody, true);

    
    verti1 = new Vertical(310,height-110,20,100);
    verti2 = new Vertical(490,height-110,20,100);
    hori1 = new Horizontal(400,height-50,200,20);

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)


    
    

    //Create a Ground
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  verti1.display();
  verti2.display();
  hori1.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);

  }
}





