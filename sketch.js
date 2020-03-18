
var r = 100;
var b = 200;
var g = 250;
function setup() {
  createCanvas(800,400);
  
  
  
}

function draw() {
  r=map(mouseX,0,400,0,255);
  b=map(mouseX,100,200,50,100);
  g=map(mouseX,300,50,100,150)
  background(r,b,g);  
  ellipse(mouseX,mouseY,20,20)
  

  

  }
