function setup() {
   createCanvas(640,480);
   background(128,98,34)
   playerOne = new person(10, 460, 20, 20);
   playerTwo = new person(40, 440, 40, 20);
  // put setup code here
}

function draw() {

  playerOne.display();
  playerTwo.display();
  background(600,600,600);  
}
function person(xPos, yPos, lenght, height){
	rect(xPos, yPos, height, lenght);
}