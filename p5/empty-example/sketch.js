var player,player2;
function setup() {
  createCanvas(800,400);
  player = createSprite(50,50,50,50);
  player2 = createSprite(50,300,50,50);
    
    
}

function draw() {
  background(25,255,255);
 
      

  player.collide(player2);

  if(keyDown("s")){
      player.rotation -=10;
  }
    
    
  drawSprites();
}