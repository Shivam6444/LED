function setup() {
   createCanvas(640,480);
   background(20,142,229)
   playerOne = new person(10, 460, 20, 20);
   playerTwo = new person(40, 440, 40, 20);
  // put setup code here
}

function draw() {

  playerOne.display();
  playerTwo.display();
  background(600,600,600);
    
  line(30, 50, 85, 75);
    stroke(255);
    
    
}
function person(xPos, yPos, lenght, height){
	rect(xPos, yPos, height, lenght);
   // if(keyIsPressed(LEFT_ARROW)){
     //xpos ++;   
    //}
    //}
} 