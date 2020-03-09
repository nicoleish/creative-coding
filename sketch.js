let bubbles = [];
var a;
var b;
var d;
var b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  middleX = windowWidth/2;
  middleY = windowHeight/2;
  
  for (let i = 0; i < 300; i++) {
    bubbles[i] = new Bubble(middleX, middleY);
  }
  rate = 5
  r=26
}
function draw() {  
    background(20, 30, 50);
  noFill(0);
  strokeWeight(1.2);
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(middleX+25, middleY+60, 300, 400);

  noFill();
  stroke(255);
  //eyes
  arc((middleX +25) -70,(middleY+60)-20,80, 80, 0, PI);
  arc((middleX +25) + 70,(middleY+60)-20,80, 80, 0, PI);
  // mouth
  // arc(middleX +25,(middleY+60)+60,80, 80, 0, PI/4);  

  //300 x 200
  fill(255);
  ellipse((middleX +25) - 155, (middleY+60)-20, 20,40);
  ellipse((middleX +25) + 155, (middleY+60)-20, 20,40);
  
  //curser cloud
  fill(255);
  noStroke();
  strokeWeight(2);
    ellipse(mouseX+2, mouseY+2, 26, 26);
    ellipse(mouseX+10,mouseY-2 + 12,26,26);
    ellipse(mouseX+30,mouseY+10,26,26);
    ellipse(mouseX+30,mouseY-10,26,26);
    ellipse(mouseX+20,mouseY-11,26,26);
    ellipse(mouseX+40,mouseY,25,25);

  // middle cloud
  a = random(250);
  b = random(250);
  d = random(250);
  fill(a,b,d);
  strokeWeight(2);
    ellipse(middleX+2, middleY+2, r, r);
    ellipse(middleX+10,middleY-2 + 12,r,r);
    ellipse(middleX+30,middleY+10,r,r);
    ellipse(middleX+30,middleY-10,r,r);
    ellipse(middleX+20,middleY-11,r,r);
    ellipse(middleX+40,middleY,r-1,r-1);


  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

  if (mouseIsPressed==true) {
  	rate = rate+2;
  	r = r +1;
  }

  frameRate(rate);

}


 function mousePressed(){
    let b = new Bubble(mouseX, mouseY);
    bubbles.push(b);  	
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  framed() {
  	frameRate(10);
  }

  show() {
  	a = random(250);
  	b = random(250);
  	d = random(250);
    fill(a, b,d);
    noStroke();
    strokeWeight(2);
    ellipse(this.x+2, this.y+2, 26, 26);
    ellipse(this.x+10,this.y-2 + 12,26,26);
    ellipse(this.x+30,this.y+10,26,26);
    ellipse(this.x+30,this.y-10,26,26);
    ellipse(this.x+20,this.y-11,26,26);
    ellipse(this.x+40,this.y,25,25);
    
    // print(float(this.x));
  }
}