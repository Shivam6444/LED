var player,player2;
function setup() {
  createCanvas(800,400);
  player = createSprite(50,50,50,50);
  player2 = createSprite(50,450,50,50);
    
    
}

function draw() {
  background(255,255,255);  
  player.setSpeed(3,90);
  //player.collide(player2);
    
    
  drawSprites();
}