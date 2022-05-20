let img;// declare gobal variable to image object 

function setup() {
  createCanvas(400, 400);
  //img = loadImage ("KPR.jpeg"); 
}

function draw() {
  background('#559fc9');
  //image(img, 0, 0, 400, 400); 
  console.log(mouseX + ", " + mouseY);
  
  //Text 
  textSize(35);
  text('Where ya kneecaps at?', 15, 40);
  
  //Land
  push(); 
  fill('#31a36a'); 
  noStroke();
  scale(4);
  rect(-20, 60, 150, 60);
  pop(); 
  
  
  //Right Arm 
  fill(220, 141, 155);
  noStroke(); 
  push();
  translate(width / 2, height / 2);
  rotate(4.0);
  ellipse(-40, 35, 70, 35);
  pop(); 
  
  //Right Leg
  fill(220, 60, 95);
  noStroke();
  push(); 
  translate(width / 2, height / 2);
  rotate(1.9);  
  ellipse(66, 25, 66, 35); 
  pop(); 

  //Body
  fill(220, 141, 155);
  noStroke(); 
  circle(195, 215, 120); 
  
  //Eyes
  fill(0);
  ellipse(210, 197, 10, 25);
  ellipse(227, 195, 10, 25);
  
  //Mouth
  fill(0);
  beginShape();
  curveVertex(214, 217);
  curveVertex(230, 215);
  curveVertex(226, 219);
  curveVertex(221, 221);
  curveVertex(214, 217);
  curveVertex(220, 217);
  endShape();
  
  fill(0);
  beginShape();
  vertex(214, 214);
  bezierVertex(216, 220, 215, 218, 211, 223);
  endShape();
  
  fill(0);
  beginShape();
  vertex(230, 216);
  bezierVertex(229, 208, 227, 215, 232, 220);
  endShape();
  
  //Left Arm
  fill(220, 141, 155);
  noStroke();
  translate(width / 2, height / 2);
  rotate(PI / 1.2);
  ellipse(70, 17, 66, 35); 
  
  //Left Leg
  fill(220, 60, 95);
  noStroke();
  translate(width / 2, height / 2);
  rotate(3.7);
  ellipse(290, 135, 66, 35); 
  
  //Blade
  fill('#b7b9bd'); 
  noStroke();
  ellipse(353, 15, 17, 90); 
  
  //Knife 
  fill(0);
  noStroke();
  rect(345, 45, 15, 55);

}
