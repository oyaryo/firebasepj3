// let locationX, locationY;
// let velocityX, velocityY;

// function setup() {
//   frameRate(30);
//   createCanvas(windowWidth, windowHeight);
//   colorMode(HSB);
//   locationX = width / 2;
//   locationY = height / 2;
//   velocityX = 2;
//   velocityY = 2;
// }

// function draw() {
//   background("#fff");
//   noStroke();
//   fill(200, 100, 100, 1);
//   ellipse(locationX, locationY, 80, 80);

//   if (locationX > width || locationX < 0) {
//     velocityX = velocityX * -1;
//   }

//   if (locationY > height || locationY < 0) {
//     velocityY = velocityY * -1;
//   }

//   locationX += velocityX;
//   locationY += velocityY;
// }

function setup() {
  background(0);
  frameRate(10);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  noStroke();
  ellipse(random(0, width), random(0, height), 80, 80);
  fill(random(180, 220), 100, 100, 0.3);
}
