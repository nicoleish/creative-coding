let bubbles = [];
var a
var b
var d

function setup() {
  createCanvas(windowWidth, windowHeight);
  middleX = windowWidth/2;
  middleY = windowHeight/2;
  
  for (let i = 0; i < 300; i++) {
    bubbles[i] = new Bubble(middleX, middleY);
  }
  
  
  
}

function draw() {  
    background(20, 30, 50);
  noFill(0);
  strokeWeight(1.2);
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(middleX+25, middleY+60, 300, 400);

  // middleX = middleX +25
  // middleY = middleY + 60

  //300 x 200
  fill(255);
  ellipse((middleX +25) - 155, (middleY+60)-20, 20, 40);
  ellipse((middleX +25) + 155, (middleY+60)-20, 20,40);
  
  // //main cloud
  //   fill(255);
  // noStroke();
  //     strokeWeight(2);
  //   ellipse(middleX+2, middleY+2, 26, 26);
  //   ellipse(middleX+10,middleY-2 + 12,26,26);
  //   ellipse(middleX+30,middleY+10,26,26);
  //   ellipse(middleX+30,middleY-10,26,26);
  //   ellipse(middleX+20,middleY-11,26,26);
  //   ellipse(middleX+40,middleY,25,25);


  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
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

  show() {
    frameRate(15);
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