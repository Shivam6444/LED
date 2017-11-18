var player,player2,line,box;
var gravity = 1;
var jumping;


function setup() {
  createCanvas(800,400);
  var imgp1 = loadImage("assets/player1.png");
  line = createSprite(0,400,8000,75);
  frameRate(30);
  player = createSprite(50,390,20,30);
  box = createSprite(450,250,100,40);
  box.shapeColor = color(19,197,154);
  //box.setCollider(rectangle,0,0,50,40)
    
}

function draw() {

  background(148,111,225);
  
  player.addSpeed(gravity, 90);
  
  if(player.collide(line)||player.collide(box)){
    player.velocity.y = 0;
    if(jumping) jumping = false;
    //player.velocity.x=0;
  }

  if(keyWentDown(" ") && !jumping){

    player.addSpeed(-gravity-17, 90);
    jumping = true;
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