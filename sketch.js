  var shade = 0;
  var radius = 100;
  var cx = 25;
  var cy = 25;
  var theta = radians(0);
  var d = 50;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(255);
}

function draw() {
  // put drawing code here
  
  background(255);
  
  cx = cos(theta) * radius + width/2;
  cy = sin(theta) * radius + height/2;
  
  fill(0, shade, 0);
  circle(cx,cy, d);
  line(width/2, height/2, cx, cy);
  
  theta += radians(1);
 
  if (int(degrees(theta) % 60) == 0){
    shade += 10;
  }
  if (shade >= 255){
    shade = 0;
  }

}
