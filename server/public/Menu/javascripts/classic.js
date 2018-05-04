function Classic() {
  this.x = 280*widthRata;
  this.y = 330*heightRata;

  this.show = function(){
    image(classic, this.x-30*widthRata, this.y-30*heightRata, 301*widthRata, 62*heightRata);
  }
}