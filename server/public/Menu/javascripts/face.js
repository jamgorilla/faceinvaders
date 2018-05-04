function Face() {
  this.x = 280*widthRata;
  this.y = 400*heightRata;

  this.show = function(){
    image(faceIn, this.x-30*widthRata, this.y-30*heightRata, 263*widthRata, 62*heightRata);
  }

  this.select = function(){
   window.location = './game.html';    
  }
}