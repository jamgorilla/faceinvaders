var descend = 0;

function preload() {
  title = loadImage('Title/images/Stitle2.png');
  faceimg = loadImage('Title/images/face3.png');

  fanfare = loadSound('Title/sounds/fanfare.mp3');
  faceHit = loadSound('Title/sounds/faceHit.mp3');
}

function setup() {
  createCanvas(screenWidth, screenHeight); 
  Stitle = new Title();
  face = new Face();
}


function draw() {
  background(0);
  descend++;

  if (descend < 450) {
    Stitle.show();
    Stitle.move();
  }

  if (descend > 300 && descend < 450) {
    face.show();
    face.move();
  }
  
  if (descend > 450) {
    window.location.href = './menu.html';
  }
}
