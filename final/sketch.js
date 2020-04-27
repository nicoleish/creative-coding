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
