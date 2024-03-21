let x =300;
let speed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(64, 210, 230);
  
  //default colors
  strokeWeight(1);
  stroke(181, 72, 224);
  fill(255);
  
  //sun
  fill(255, 245, x);
  ellipse(x, x, x);
  x = x - speed;
  
  if (x <= -100)
    {
      speed = -speed;
    }
  
  if(x >= 400)
    {
      speed = -speed;
    }
  
  
  //console.log(x);

  
  
  //ground
  fill(67, 201, 40);
  rect(0, 300, 400, 100, 5);
  
}