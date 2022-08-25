var trex, trex_running, trex_collided, edges;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  trex_collided=loadImage("trex_collided.png")

}

function setup() {
  createCanvas(600, 200);
   trex=createSprite(50,150,50,80)
  trex.addAnimation("running",trex_running)
 // trex.addImage(trex_collided)
 edges=createEdgeSprites() 

 ground=createSprite(300,190,600,20)
 ground.velocityX=-3 
}

function draw() { 
  background(220);
 

  if(keyDown("space")){
    trex.velocityY=-7
  }

  // adding gravity
 trex.velocityY += 0.2

 if(ground.x<0){
  ground.x=300
 }
trex.collide(ground)

console.log(ground.x)
  drawSprites();
}