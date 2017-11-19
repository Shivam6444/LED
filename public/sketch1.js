
var player,player2,line,box, box2,coin,button1,flag;
var score = 0;
var gravity = 1;
var jumping1 = false;
var jumping2 = false;

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




function setup() {
	createCanvas(800,400);
	var imgp1 = loadImage("assets/player1.png");
	line = createSprite(0,400,8000,75);
	frameRate(30);

	player = createSprite(50,390,20,30);
	player2 = createSprite(90,327,40,70);

	box = createSprite(250,50,100,550);
	box.shapeColor = color(19,197,154);
	box2 = createSprite(650,350,100,350);
	box2.shapeColor = color(19,197,154);

	coin = createSprite(150,100,10,10);
	coin.shapeColor = color(250,223,27);

	button1 = createSprite(330,362,10,3);

	flag = createSprite(750, 150, 10, 15);
	flag.shapeColor = color(225,0,0);

	boxBorderend = createSprite(width,height,5,height *2);
	boxBorderend.shapeColor = color(0,0,0);
	boxBorderfirst = createSprite(0,0,5,height *2);
	boxBorderfirst.shapeColor = color(0,0,0);
	boxBorderTop = createSprite(height, 0, height*2,5 );
	boxBorderTop.shapeColor = color(0,0,0);    
}

function draw() {

	background(148,111,225);

	s = ("Score: " + score); 
	fill(255,255,255);
	text(s, 10, 10, 70, 80);
	textSize(350);

	player.addSpeed(gravity, 90);
	player2.addSpeed(2*gravity, 90);

	if(!box.removed){
		if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(box)||player.collide(box2)||player.collide(player2)){
			player.velocity.y = 0;
			if(jumping1) jumping1 = false;
			//player.velocity.x=0;
		}
	}else if(!box2.removed){
		if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(box2)||player.collide(player2)){
			player.velocity.y = 0;
			if(jumping1) jumping1 = false;
		}
	}else{
		if(player.collide(boxBorderend) || player.collide(boxBorderTop)|| player.collide(boxBorderfirst)||player.collide(line)||player.collide(player2)){
			player.velocity.y = 0;
			if(jumping1) jumping1 = false;
		}
	}

	if(!box.removed){
		if(player2.collide(boxBorderend) || player2.collide(boxBorderTop)|| player2.collide(boxBorderfirst)||player2.collide(line)||player2.collide(box)||player2.collide(box2)||player2.collide(player)){
			player2.velocity.y = 0;
			if(jumping2) jumping2 = false;
		}
	}else if(!box2.removed){
		if(player2.collide(boxBorderend) || player2.collide(boxBorderTop)|| player2.collide(boxBorderfirst)||player2.collide(line)||player2.collide(box2)||player2.collide(player)){
			player2.velocity.y = 0;
			if(jumping2) jumping2 = false;
		}
	}else{
		if(player2.collide(boxBorderend) || player2.collide(boxBorderTop)|| player2.collide(boxBorderfirst)||player2.collide(line)||player2.collide(player)){
			player2.velocity.y = 0;
			if(jumping2) jumping2 = false;
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
	if(!coin.removed){
		if(player.collide(coin)){
			coin.remove();
			score++;
		}
	}
	if(!flag.removed){
		if(player.collide(flag)){
			flag.remove();
			box2.remove();
			//remove();
			//$.getscript("sketch2.js",level2(score){});
			// level2(score);
		}
	}
	if(player.collide(button1)){
		box.remove();
	}
	drawSprites();
}
