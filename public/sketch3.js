//LEVEL 3

var player,player2,line,box1,box2,box3,box3a,box3b,box3c,box4,box5,button1,button2,button3,flag;
var coin1,coin2,coin3,coin4,coin5,coin6,coin7;
var score = 0;
var gravity = 1;
var jumping1 = false;
var jumping2 = false;
var br;

/* Socket Shit */
var socket = io();
var user = 0;
var userCount = 0;

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

socket.on('userCount', function(msg) {
   console.log("User: " + msg);
   if (userCount == 0) {
	user = msg;
	userCount = msg;
   } else {
	playerv = [
	  player.position.x,
     	  player.position.y
	];
	player2v = [
	  player2.position.x,
	  player2.position.y
	];
	console.log("Emitted");	
    	socket.emit('player', playerv);
    	socket.emit('player2', player2v);
   	userCount++;
   }
});

socket.on('player', function(msg) {
	console.log(msg);
	console.log("Receved");
	player.remove();
  	player = createSprite(msg[0],msg[1],20,30);
});
socket.on('player2', function(msg) {
	console.log(msg);
	console.log("Receved");
	player2.remove();
  	player2 = createSprite(msg[0],msg[1],40,70);
});
/* End of Socket Shit */


function setup(){

  br = loadImage("back3.jpg");
  createCanvas(800,400);
  line = createSprite(0,400,8000,75);
  frameRate(30);
  player = createSprite(780,350,20,30);
    player2 = createSprite(30,327,40,70);

    box1 = createSprite(90, 287, 50, 150);
    box2 = createSprite(92, 260, 40, 30);
    box3 = createSprite(100, 200, 480, 30);
    box3a = createSprite(360, 287, 30, 150);
    box3b = createSprite(390, 310, 30, 105);
    box3c = createSprite(420, 325,30,75);
    box4 = createSprite(550, 180, 200, 300);
    box5 = createSprite(700, 280,100, 100);

    button1 = createSprite(620, 360, 10,5);
    button2 = createSprite(450, 100, 5, 10);
    button3 = createSprite(200,360,10,5);

    flag = createSprite(250,350,10,10);

    boxBorderend = createSprite(width,height,5,height *2);
    boxBorderend.shapeColor = color(0,0,0);
    boxBorderfirst = createSprite(0,0,5,height *2);
    boxBorderfirst.shapeColor = color(0,0,0);
    boxBorderTop = createSprite(height, 0, height*2,5 );
    boxBorderTop.shapeColor = color(0,0,0);


}

function draw() {
    
  background(br);
  s = ("Score: " + score); 
  fill(255,255,255);
  text(s, 10, 10, 70, 80);
  textSize(350);

  player.addSpeed(gravity, 90);
  player2.addSpeed(2*gravity, 90);
  if(!box1.removed){
  if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(box1)||player.collide(box2)||player.collide(box3)||player.collide(box3a)||player.collide(box3b)||player.collide(box3c)||player.collide(box4)||player.collide(box5)||player.collide(player2)){
      player.velocity.y = 0;
      if(jumping1) jumping1 = false;
      //player.velocity.x=0;
  }
 }else if(!box3c.removed){
  if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(box2)||player.collide(box3)||player.collide(box3a)||player.collide(box3b)||player.collide(box3c)||player.collide(box4)||player.collide(box5)||player.collide(player2)){
      player.velocity.y = 0;
      if(jumping1) jumping1 = false;
      //player.velocity.x=0;
    }
 }else if(!box3.removed){
    if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(box2)||player.collide(box3)||player.collide(box3a)||player.collide(box3b)||player.collide(box4)||player.collide(box5)||player.collide(player2)){
      player.velocity.y = 0;
      if(jumping1) jumping1 = false;
      //player.velocity.x=0;
   }
 }else{
  if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(box2)||player.collide(box3a)||player.collide(box3b)||player.collide(box4)||player.collide(box5)||player.collide(player2)){
      player.velocity.y = 0;
      if(jumping1) jumping1 = false;
      //player.velocity.x=0;
   }
 }
 if(!box1.removed){
  if(player2.collide(boxBorderend) || player2.collide(boxBorderTop)|| player2.collide(boxBorderfirst)||player2.collide(line)||player2.collide(box1)||player2.collide(box2)||player2.collide(box3)||player2.collide(box4)||player2.collide(box5)||player2.collide(player)){
    player2.velocity.y = 0;
    if(jumping2) jumping2 = false;
    //player.velocity.x=0;
  }
 }else{
  if(player2.collide(boxBorderend) || player2.collide(boxBorderTop)|| player2.collide(boxBorderfirst)||player2.collide(line)||player2.collide(box2)||player2.collide(box3)||player2.collide(box4)||player2.collide(box5)||player2.collide(player)){
    player2.velocity.y = 0;
    if(jumping2) jumping2 = false;
    //player.velocity.x=0;
  }
 }
 /* More Socket Shit */
 if(keyWentDown("UP_ARROW") && !jumping1){
	 socket.emit(user, "up");
 }else if(keyDown("RIGHT_ARROW")){
	 socket.emit(user, "right");
 } else if(keyDown("LEFT_ARROW")){
	 socket.emit(user, "left");
 } else{
	 //socket.emit(user, "down");
 }
 /* End of Socket Shit */

  if(player.collide(button1)){
      box1.remove();
  }
  if(player.collide(button2)){
    box3.remove();
  }
  if(player2.collide(button3)){
    box3c.remove();
  }

  if(!flag.removed){
    if(player.collide(flag)){
      flag.remove();
      //tally score
    }
  }



  drawSprites();

}
