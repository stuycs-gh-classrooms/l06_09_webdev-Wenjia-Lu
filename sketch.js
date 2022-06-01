  float shade = 0;
  int radius = 100;
  float cx = 25;
  float cy = 25;
  float theta = radians(0);
  int d = 50;

function setup() {
  // put setup code here
  size(400,400);
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
