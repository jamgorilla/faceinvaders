function Title() {
  this.x = 210*widthRata;
  this.y = -100*heightRata;
  var once = 0;

  this.show = function(){
    image(title, this.x-30*widthRata, this.y-30*heightRata, 438*widthRata, 190*heightRata);
  }

  this.move = function() {
    if (once < 1) {
      fanfare.play();
      once++;
    }

    if (this.y < 190*heightRata) {
      this.y = this.y+1*heightRata;
    } 
  }
}