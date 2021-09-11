const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world , tower , ground , cannon , backgroundImg;
var cannonBall;
var balls = [];

function preload(){
    backgroundImg = loadImage("assets/background.gif");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tower = new Tower(150,350,160,310);
 
    ground = new Ground(600,590,1400,20);

    cannon = new Cannon(180,110,100,50,-PI/4);

    
}

function draw(){
    background(0);
    image(backgroundImg,0,0,1200,600);
    Engine.update(engine);
   
    tower.display();
    ground.display();
    cannon.display();
    //cannonBall.display();

}

function keyReleased(){
    if(keyCode === DOWN_ARROW){
        balls[balls.length-1].shoot();
    }
}

function keyPressed(){
    if(keyCode === DOWN_ARROW){
        cannonBall = new CannonBall(cannon.x,cannon.y);
        balls.push(cannonBall);
    }
}
