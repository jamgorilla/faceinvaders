function Pointer() {
  this.x = 190*widthRata;
  this.y = 320*heightRata;


  this.show = function(){
    image(point2, this.x-30*widthRata, this.y-30*heightRata, 71*widthRata, 71*heightRata);
  }

  this.select = function(dir){
    beep.play();
    if (dir === 1) {
      this.x = 190*widthRata;
      this.y = 320*heightRata;
    } else if (dir === -1) {
      this.x = 190*widthRata;
      this.y = 390*heightRata;
    }
  }

  this.enter = function(){
    if (this.y === 320*heightRata) {
      window.location = './game.html'; 
    } else if (this.y === 390*heightRata) {
      window.location = './game1.html';
    }
  }
}