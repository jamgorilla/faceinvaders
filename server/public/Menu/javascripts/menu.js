var play = 0;

function preload() {
  logo = loadImage('Menu/images/face_invaders_logo2.png');
  classic = loadImage('Menu/images/classic.png');
  faceIn = loadImage('Menu/images/face_inv.png');
  point2 = loadImage('Menu/images/pointer_yellow.png');

  metal = loadSound('Menu/sounds/Metal_Track.wav');
  beep = loadSound('Menu/sounds/beep1.mp3');
}


function setup() {
  createCanvas(screenWidth, screenHeight); 

  title = new Logo();
  classicOp = new Classic();
  faceOp = new Face();
  pointer = new Pointer();
}


function draw() {
  background(0);
  title.show();
  classicOp.show();
  faceOp.show();
  pointer.show();

  if (play < 1) {
    metal.play();
    play++;
  }
}


function keyPressed(){

  if (keyCode === 13) {
    pointer.enter();
  }

  if (keyCode === UP_ARROW){
    pointer.select(1);
  } else if (keyCode === DOWN_ARROW){
    pointer.select(-1);
  }
}



