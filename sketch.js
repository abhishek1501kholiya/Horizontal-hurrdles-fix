var Canvas ;
var jumoer1 , jumper2 , jumper3 , jumper4 ;
var Hurdle1;
var playerCount;
var form;
var playername;
var gameState = 0;
function setup (){
Canvas = createCanvas(800,400);
playerCount = 0;
form = new Form();
}
function draw(){
background(255);
if(gameState === 0){
form.display();
}
if(playerCount === 1){
  form .hide();
  console.log("working");
  gameState = 1;
}
if(gameState===1){
   jumper1 = new Jumper(400,325,20,80);
   jumper1.display();
   jumper1.move();
 
   randomMk();
   
  
}
}
function randomMk (){
  if(jumper2.x>=400){
    Hurdle1 = new Hurdle(600,330,20,80);
  }
} 
