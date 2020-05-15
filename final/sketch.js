var scene;

let backdrop;
let backdrop2;
let backdrop3;

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
  scene = 0;
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 100);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

// start screen so they can pick the 
function startScreen() {
  background('#d7c3d7');
  textSize(32);
  fill(255);
  text('welcome to the catching bug game', width / 2 - 140, height / 2 + 10);
  textSize(24);
  
  text('up arrow =', width / 2 - 215, height / 2 + 70);
  image(player1, width / 2 - 200, height / 2 + 75, 100, 100);
  
  text('down arrow =', width / 2 - 315, height / 2 + 170);
  image(player2, width / 2 - 315, height / 2 + 175, 100, 100);

  //title 
  textSize(48);
  fill(255);
  text('Catch le Bugs!', width / 2 - 160, height / 2 - 150);
  image(bees, width / 2 - 230, height / 2 - 150, 50, 50);
  image(ladybug, width / 2 - 180, height / 2 - 160, 50, 50);
  image(butterfly, width- 180, height- 160, 50, 50);
  image(dragonfly, width- 140, height- 110, 50, 50);

  

} // initialize the start screen upon starting the code.

function draw() {
  changeScene();
  
  // score board!
  textSize(50);
  textFont('Impact');
  text("Score: " + score, 10, 45);


  if (scene == 0) {
    startScreen();
  }
  if (scene == 1) {
    //render scene
    scene1();
  }
  if (scene == 2) {
    scene2();
  }
  if (scene == 3) {
    scene3();
  }

  //how to activate end-screen
  if (score > 45) {
    congrats();
  }
}

function keyPressed() {
  //each arrow key can change to play screen 
  //each arrow will be a character 
  // hard code intro for these 
  //make box with images
  if (keyCode === UP_ARROW) {
    player = player1;
    scene += 1;
  } else if (keyCode === DOWN_ARROW) {
    scene += 1;
    player = player2;
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

//change scene states if the player's x-position is outside of the window!
function changeScene() {
  if (cx > windowWidth - 120) {
    scene += 1;
  }
}





//have each sceen have a certain amount of bugs 
//each scene as a function with certain amount of bugs 
// try to get diversity in bugs per screen
function scene1() {
  background(backdrop);
  image(player, cx, cy, cr, cr);
  cx += (targetX - cx) * easing;
  cy += (targetY - cy) * easing;

  //all butterflies 

  //other butterdlies 
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
  
    // score board!
  fill('#03a9f4');
  textSize(50);
  textFont('Impact');
  text("Score: " + score, 10, 45);


}

function scene2() {
  background(backdrop2);
  image(player, cx, cy, cr, cr);
  cx += (targetX - cx) * easing;
  cy += (targetY - cy) * easing;

  //all butterflies 

  //other butterdlies 
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
  
    // score board!
  textSize(50);
  textFont('Impact');
  text("Score: " + score, 10, 45);
}

function scene3() {
  background(backdrop3);
  image(player, cx, cy, cr, cr);
  cx += (targetX - cx) * easing;
  cy += (targetY - cy) * easing;

  //all butterflies 

  //other butterdlies 
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
  
    // score board!
  textSize(50);
  textFont('Impact');
  text("Score: " + score, 10, 45);
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
      image(butterfly, this.x + 200, this.y+200, this.r, this.r);
      image(ladybug, this.x, this.y, this.r, this.r);
      image(dragonfly, this.x-100, this.y-150, this.r, this.r);
      image(bees, this.x+300+random(10), this.y+300+random(10), this.r, this.r);
  

}
}