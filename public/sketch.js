var player,player2,line,box,coin,button1;
var score = 0;
var gravity = 1;
var jumping1 = false;
var jumping2 = false;
var socket = io();

socket.on('1', function(msg){
  console.log(msg);
  if (msg == "right") {
    player.velocity.x+=1;
} else if (msg == "left") {
    player.velocity.x-=1;
} else if (msg == "up") {
    player.addSpeed(-gravity-17, 90);
    jumping1 = true;
} else if (msg == "down") {
     player.addSpeed(gravity, 90);
     player.velocity.x=0;
}
});

socket.on('2', function(msg){
  console.log(msg);
  if (msg == "right") {
    player2.velocity.x+=1;
} else if (msg == "left") {
    player2.velocity.x-=1;
} else if (msg == "up") {
    player2.addSpeed(-gravity-17, 90);
    jumping1 = true;
} else if (msg == "down") {
     player2.addSpeed(gravity, 90);
     player2.velocity.x=0;
}
});

function setup() {
  createCanvas(800,400);
  var imgp1 = loadImage("assets/player1.png");
  line = createSprite(0,400,8000,75);
  frameRate(30);
  player = createSprite(50,390,20,30);
  player2 = createSprite(90,327,40,70);
  box = createSprite(250,50,100,550);
  box.shapeColor = color(19,197,154);
  coin = createSprite(150,100,10,10);
  coin.shapeColor = color(250,223,27);
  button1 = createSprite(330,362,10,3);
    
}

function draw() {
    
  background(148,111,225);
  s = ("Score: " + score); 
  fill(255,255,255);
  text(s, 10, 10, 70, 80);
  textSize(350);
  
  player.addSpeed(gravity, 90);
  player2.addSpeed(gravity, 90);
  
  if(player.collide(line)||player.collide(box)||player.collide(player2)){
    player.velocity.y = 0;
    if(jumping1) jumping1 = false;
    //player.velocity.x=0;
  }
    
  if(player2.collide(line)||player2.collide(box)||player2.collide(player)){
    player2.velocity.y = 0;
    if(jumping2) jumping2 = false;
    //player.velocity.x=0;
  }

  if(keyWentDown("UP_ARROW") && !jumping1){
    socket.emit('1', "up");
  }else if(keyDown("RIGHT_ARROW")){
    socket.emit('1', "right");
  } else if(keyDown("LEFT_ARROW")){
    socket.emit('1', "left");
  } else{
    socket.emit('1', "down");
  }
    
  if(keyWentDown("w") && !jumping2){
    socket.emit('2', "up");
  }else if(keyDown("d")){
    socket.emit('2', "right");
  }else if(keyDown("a")){
    socket.emit('2', "left");
  }
  else{
    socket.emit('2', "down");
  }
    
    
  if(player.collide(coin)){
      coin.remove();
      score++;
  }
    
  if(player.collide(button1)){
      box.remove();
  }
  
    
  drawSprites();
}
