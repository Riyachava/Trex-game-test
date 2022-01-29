var trex ,trex_running;
var edges;
var ground, ground1;
var invisible;
var cloud, cloud1;
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var score = 0;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground1 = loadImage("ground2.png")
  cloud1 = loadImage("cloud.png")
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
  obstacle4 = loadImage("obstacle4.png")
  obstacle5 = loadImage("obstacle5.png")
  obstacle6 = loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200);
  
  trex = createSprite(50,150,5,5);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  edges = createEdgeSprites();

  ground = createSprite(200,150,600,5);
  ground.velocityX = -3;
  ground.addImage(ground1);

  invisible = createSprite(200,160,600,5);
  invisible.visible = false;

}

function draw(){
  background("white");
  
  text("Score " + score, 500,50)

  score = score + Math.round(frameCount / 60)

if(keyDown("space") && trex.y>=70) {
  trex.velocityY = -5;
}

if(ground.x < 0) {
  ground.x = ground.width/2;
}

  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(invisible);

  spawnClouds();

  spawnObstacles();

  drawSprites();
}



function spawnClouds() {
  if(frameCount % 60 === 0) {
    cloud = createSprite(540,random(50,0),5,5);
    cloud.velocityX = -3;
    cloud.addImage(cloud1);
    cloud.scale = 0.8;
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloud.lifetime = 200
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,150,10,40);
    obstacle.velocityX = -6;
    var rand = Math.round(Math.random(1,6));
    switch(rand) {
      case 1:
        obstacle.addImage(obstacle1)
        console.log(1)
      break;

      case 2:
        obstacle.addImage(obstacle2)
        console.log(2)
      break;

      case 3:
        obstacle.addImage(obstacle3)
        console.log(3)
      break;

      case 4:
        obstacle.addImage(obstacle4)
        console.log(4)
      break;

      case 5:
        obstacle.addImage(obstacle5)
        console.log(5)
      break;

      case 6:
        obstacle.addImage(obstacle6)
        console.log(6)
      break;

      default:
      break;

    }

  }
}
