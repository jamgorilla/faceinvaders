function Face() {
  this.x = 300*widthRata;
  this.y = -100*heightRata;
  var once = 0;

  this.show = function() {
    image(faceimg, this.x-30*widthRata, this.y-30*heightRata, 276*widthRata, 128*heightRata);
  }

  this.move = function() {
    if (once < 1) {
      faceHit.play();
      once++;
    }

    if (this.y < 170*heightRata) {
      this.y = this.y+40*heightRata;
    }
  }
}