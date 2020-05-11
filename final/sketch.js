let backdrop;
let backdrop2;
let backdrop3;
let backdrop4;

let butterfly;
let ladybug;
let dragonfly;
let bees;


let bubbles = [];
let score = 0;

//click movement
var cx = 300;
var cy = 300;
var cr = 100;
var easing = 0.1;
var speed = 3;
var targetX = cx;
var targetY = cy;

var size_1 = 50;
var size_2 = 150;

let player;
let player1;
let player2;
let player3;
let player4;


function preload() {
  player1 = loadImage('player1.png')
  player2 = loadImage('player2.png')
  player3 = loadImage('player3.png')
  player4 = loadImage('player4.png')
  backdrop = loadImage('final_screen1.jpg');
  backdrop2 = loadImage('final_screen2.jpg');
  backdrop3 = loadImage('final_screen3.jpg');
  backdrop4 = loadImage('final_screen4.jpg');
  butterfly = loadImage('butter1.png')
  ladybug = loadImage('ladybug2.png');
  dragonfly = loadImage('dragonfly1.png');
  bees = loadImage('bee2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //all butterflies 
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(size_1, size_2);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function draw() {
  background(backdrop);
  //other butterdlies 
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

  //click movement
  player = player1;
  
  // player changes with background
  if (score > 15) {
    player = player2;
  } else if (score > 30) {
    player = player3;
  } else if (score > 40) {
    player = player4; 
  }
  image(player, cx, cy, cr, cr);
  cx += (targetX - cx) * easing;
  cy += (targetY - cy) * easing;

  // score board!
  textSize(50);
  // textFont('Press Start 2P');
  text("Score: " + score, 10, 35);
  
  if (score > 45) {
  fill('#03a9f4');
  text("You Did It! All 45 bugs!", windowWidth/2 -150 , windowHeight/2) -10;
}
  if (score == 15) {
    backdrop = backdrop2;
  } else if (score == 30) {
    backdrop = backdrop3
  } else if (score == 40) {
    backdrop = backdrop4
  }

}

function mousePressed() {
  targetX = mouseX;
  targetY = mouseY;
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }

  // to remove bug when clicked
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}


function keyTyped() {
  if (key === '1') {
    backdrop = (loadImage('final_screen1.jpg'));
  } else if (key === '2') {
    backdrop = backdrop2;
  } else if (key === '3') {
    backdrop = backdrop3;
  } else if (key === '4') {
    backdrop = backdrop4;
  }

}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      console.log("clicked!");
      score++;
      console.log(score);
    }
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }


  }

  move() {
    this.x = this.x + random(-1, -1);
    this.y = this.y + random(-2, 2);
    if (this.x < 0) {
      this.x = width;
    }
  }


  show() {
    if (score < 15) {
      image(butterfly, this.x, this.y, this.r, this.r);
    } else if (16 < score < 30) {
      image(ladybug, this.x, this.y, this.r, this.r);
    } else if ( 30 < score < 40) {
      image(dragonfly, this.x, this.y, this.r, this.r);
    } else if (score > 40) {
      image(bees, this.x, this.y, this.r, this.r);
    }

  }

}