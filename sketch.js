var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,350,900,10);
  ground.velocityX=-4;
 ground.x = ground.width /2;
  console.log(ground.x);

  survivalTime=0;
  FoodGroup=new Group();
   obstacleGroup = new Group();
  
}


function draw() {
background("lightgreen");
  if(gameState===PLAY){
    food();
    obstacles();
  if (ground.x < 200){
      ground.x = ground.width/2;
    }
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100, 50);
  
  monkey.collide(ground);
  
    
    
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
    
    
  }
  
  
  drawSprites();
}

function food(){
  if(World.frameCount % 80 ===0){
    
  var banana= createSprite(0,Math.round(random(20, 250)),10,10);
  banana.addImage(bananaImage);
  banana.velocityX=3;
  banana.scale=0.09;
  banana.setLifetime=50;
    FoodGroup.add(banana);
  }
  
}
function obstacles(){
  if(frameCount % 300===0){
    var obstacle= createSprite(600,200,10,40);
    obstacle.y=Math.round(random(330,300));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.scale=0.2;
    obstacle.setLifertime=50;
    obstacleGroup.add(obstacle);
  }
}




