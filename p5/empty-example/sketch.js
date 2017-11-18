var player,player2,line;

function setup() {
  createCanvas(800,400);
  player = createSprite(50,50,50,50);
  //player2 = createSprite(50,300,50,50);
  line = createSprite(0,400,8000,75);
    
}

function draw() {
  background(25,255,255);
  
 
      

  
  player.collide(line);

  if(keyDown("DOWN_ARROW")){
      player.setVelocity(0,5);
  }else if(keyDown("UP_ARROW")){
    player.setVelocity(0,-5);
  }else if(keyDown("RIGHT_ARROW")){
    player.setVelocity(5,0);
  }else if(keyDown("LEFT_ARROW")){
    player.setVelocity(-5,0);
  }
  else{
      player.setVelocity(0,0);
  }
    
    
  drawSprites();
}