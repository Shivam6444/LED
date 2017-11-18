var player,player2,line;
var gravity = 9.81;


function setup() {
  createCanvas(800,400);
  player = createSprite(50,50,50,50);
  //player2 = createSprite(50,300,50,50);
  line = createSprite(0,400,8000,75);
  frameRate(30);
    
}

function draw() {

  background(25,255,255);
  
  player.addSpeed(gravity, 90);
  
  if(player.collide(line)){
    player.velocity.y = 0;
  }
  if(keyWentDown(" ")){
    player.addSpeed(-gravity-30, 90);
  }else if(keyDown("RIGHT_ARROW")){
    player.velocity.x+=1;
  }else if(keyDown("LEFT_ARROW")){
    player.velocity.x-=1;
  }
  else{
     player.addSpeed(gravity, 90);
     player.velocity.x=0;
  }
    
    
  drawSprites();
}