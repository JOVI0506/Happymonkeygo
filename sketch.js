var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(300, 400, 1, 1);
  monkey.addAnimation("sprint", monkey_running);
  monkey.scale = 0.1
  
  
  obstacle = createSprite(590, 440, 1, 1);  
  obstacle.addImage("obs1", obstacleImage);
  obstacle.scale=0.1
  obstacle.velocityX=-5
  
  ground = createSprite(300, 470, 1000, 20);                                                
  banana=createSprite(400,300,1,1);
  banana.addImage("eat",bananaImage);
  banana.scale=0.1
  banana.velocityX=-3

  monkey.setCollider("rectangle", 0, 0, 500 , monkey.height);
  monkey.debug = true                                   
}


function draw() {
  background("green")

    if (keyDown("space") && monkey.y >= 100) {
      monkey.velocityY = -13;
    }
 monkey.velocityY = monkey.velocityY + 0.8
  
    monkey.collide(ground);
    monkey.collide(obstacle);
  
  if (obstacle.x < 0) {
    obstacle.x = obstacle.width / 1;
  }
  if (banana.x < 0) {
      banana.x = banana.width / 1;
  }
 
        
    
  drawSprites();
}