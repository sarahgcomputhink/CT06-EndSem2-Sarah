let posX, xSpeed;

function setup() {
  createCanvas(600, 400);
  posX = width / 2;
  xSpeed = 5;
}

function draw() {
  background("lightblue");

  posX += xSpeed;

  //Bounce at left and right edges
  if (posX >= width - 25 || posX <= 25) {
    xSpeed = -xSpeed;
  }

  fill("limegreen");
  circle(posX, height / 2, 50);
}