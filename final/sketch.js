let backdrop;
let y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  backdrop = loadImage('final_screen1.jpg');
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backdrop);

}

function keyTyped() {
  if (key === '1') {
  	backdrop = "final_screen1.jpg";
  } else if (key === '2') {
    backdrop = "final_screen2.jpg";
} else if (key === '3') {
    backdrop = "final_screen3.jpg";
 } else if (key === '4') {
    backdrop = "final_screen4.jpg"
  }

}