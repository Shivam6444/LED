var player,player2,line,box,coin;
var score =10;
var gravity = 1;
var jumping;


function setup() {
  createCanvas(800,400);
  var imgp1 = loadImage("assets/player1.png");
  line = createSprite(0,400,8000,75);
  frameRate(30);
  player = createSprite(50,390,20,30);
  player2 = createSprite(90,327,40,70);
  box = createSprite(450,250,100,40);
  box.shapeColor = color(19,197,154);
  coin = createSprite(200,45,10,10);
  coin.shapeColor = color(250,223,27);
  
    
}

function draw() {
    
    background(148,111,225);
s = ("Score: " + score); 
fill(255,255,255);
text(s, 10, 10, 70, 80);
textSize(350);
  
  player.addSpeed(gravity, 90);
  
  if(player.collide(line)||player.collide(box)||player.collide(player2)){
    player.velocity.y = 0;
    if(jumping) jumping = false;
    //player.velocity.x=0;
  }
    
    if(player2.collide(line)||player2.collide(box)||player2.collide(player)){
    player2.velocity.y = 0;
    if(jumping) jumping = false;
    //player.velocity.x=0;
  }

  if(keyWentDown("UP_ARROW") && !jumping){

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
    
    if(keyWentDown("w") && !jumping){

    player2.addSpeed(-gravity-17, 90);
    jumping = true;
  }else if(keyDown("d")){
    player2.velocity.x+=0.5;
  }else if(keyDown("a")){
    player2.velocity.x-=0.5;
  }
  else{
     player2.addSpeed(gravity, 90);
     player2.velocity.x=0;
  }
    
    
  if(player.collide(coin)){
      coin.remove();
      score++;
  }
    
  drawSprites();
}