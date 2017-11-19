var player,player2,line,box1,box2,box3,box4,coin,button1,flag;
var coin1,coin2,coin3,coin4,coin5,coin6,coin7;
var score = 0;//sketch.js.getScore();
var gravity = 1;
var jumping1 = false;
var jumping2 = false;
var br;

function setup(){
    br = loadImage("back2.jpg");
	createCanvas(800,400);
	line = createSprite(0,400,8000,75);
 	frameRate(30);
 	player = createSprite(50,390,20,30);
  player2 = createSprite(90,327,40,70);

  box1 = createSprite(200,250,100,30);
  box2 = createSprite(400,150,100,30);
  box3 = createSprite(700,100, 100,30);
  box4 = createSprite(700,280, 150,100);

  coin1 = createSprite(50, 200, 10,10);
  coin1.shapeColor = color(250,223,27);
  coin2 = createSprite(180, 230, 10,10);
  coin2.shapeColor = color(250,223,27);
  coin3 = createSprite(420, 130,10,10);
  coin3.shapeColor = color(250,223,27);
  coin4 = createSprite(100,80,10,10);
  coin4.shapeColor = color(250,223,27);
  coin5 = createSprite(700, 80, 10,10);
  coin5.shapeColor = color(250,223,27);
  coin6 = createSprite(680, 290, 10,10);
  coin6.shapeColor = color(250,223,27);
  coin7 = createSprite(720, 290,10,10);
  coin7.shapeColor = color(250,223,27);

  button1 = createSprite(720, 360, 10,5);
  button1.shapeColor = color(0,0,0);

  flag = createSprite(725, 60, 10, 15);
  flag.shapeColor = color(225,0,0);

  boxBorderend = createSprite(width,height,5,height *2);
  boxBorderend.shapeColor = color(0,0,0);
  boxBorderfirst = createSprite(0,0,5,height *2);
  boxBorderfirst.shapeColor = color(0,0,0);
  boxBorderTop = createSprite(height, 0, height*2,5 );
  boxBorderTop.shapeColor = color(0,0,0);}

function draw(){
  background(br);
  s = ("Score: " + score);
  fill(255,255,255);
  text(s, 10, 10, 70, 80);
  textSize(350);

  player.addSpeed(gravity, 90);
  player2.addSpeed(2*gravity, 90);
  if(!box4.removed){
    if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(box1)||player.collide(box2)||player.collide(box3)||player.collide(box4)||player.collide(player2)){
      player.velocity.y = 0;
      if(jumping1) jumping1 = false;
    }else{
 	    if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(box1)||player.collide(box2)||player.collide(box3)||player.collide(player2)){
        player.velocity.y = 0;
        if(jumping1) jumping1 = false;
      }
    }
  }else{
     if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(box1)||player.collide(box2)||player.collide(box3)||player.collide(player2)){
        player.velocity.y = 0;
        if(jumping1) jumping1 = false;
      }
  }
  if(!box4.removed){
    if(player2.collide(boxBorderend) || player2.collide(boxBorderTop)|| player2.collide(boxBorderfirst)||player2.collide(line)||player2.collide(box1)||player2.collide(box2)||player2.collide(box3)||player2.collide(box4)||player2.collide(player)){
      player2.velocity.y = 0;
      if(jumping2) jumping2 = false;
    }else{
 	    if(player2.collide(boxBorderend) || player2.collide(boxBorderTop)|| player2.collide(boxBorderfirst)||player2.collide(line)||player2.collide(box1)||player2.collide(box2)||player2.collide(box3)||player2.collide(player)){
        player2.velocity.y = 0;
        if(jumping2) jumping2 = false;
      }
    }
  }else{
     if(player2.collide(boxBorderend) || player2.collide(boxBorderTop)|| player2.collide(boxBorderfirst)||player2.collide(line)||player2.collide(box1)||player2.collide(box2)||player2.collide(box3)||player2.collide(player)){
        player2.velocity.y = 0;
        if(jumping2) jumping2 = false;
      }
  }
  if(keyWentDown("UP_ARROW") && !jumping1){
    player.addSpeed(-gravity-12, 90);
    jumping1 = true;
  }else if(keyDown("RIGHT_ARROW")){
    player.velocity.x+=1;

  }else if(keyDown("LEFT_ARROW")){
    player.velocity.x-=1;
  }
  else{
     player.addSpeed(gravity, 90);
     player.velocity.x=0;
  }

  if(keyWentDown("w") && !jumping2){
    player2.addSpeed(-gravity-17, 90);
    jumping2 = true;
  }else if(keyDown("d")){
    player2.velocity.x+=0.5;
  }else if(keyDown("a")){
    player2.velocity.x-=0.5;
  }
  else{
     player2.addSpeed(gravity, 90);
     player2.velocity.x=0;
  }


  if(!coin1.removed){
    if(player.collide(coin1)){
        coin1.remove();
        score++;
    }
  }
  if(!coin2.removed){
    if(player.collide(coin2)){
        coin2.remove();
        score++;
    }
  }
  if(!coin3.removed){
    if(player.collide(coin3)){
        coin3.remove();
        score++;
    }
  }
  if(!coin4.removed){
    if(player.collide(coin4)){
        coin4.remove();
        score++;
    }
  }
  if(!coin5.removed){
    if(player.collide(coin5)){
        coin5.remove();
        score++;
    }
  }
  if(!coin6.removed){
    if(player.collide(coin6)){
        coin6.remove();
        score++;
    }
  }
  if(!coin7.removed){
    if(player.collide(coin7)){
        coin7.remove();
        score++;
    }
  }
  if(player.collide(button1)){
    box4.remove();
  }
  if(!flag.removed){
    if(player.collide(flag)){
      flag.remove();
      //remove();
      //level3(score);
    }
  }

  drawSprites();

}
