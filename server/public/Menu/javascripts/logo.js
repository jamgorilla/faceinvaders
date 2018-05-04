function Logo() {
  this.x = 250*widthRata;
  this.y = 50*heightRata;


  this.show = function(){
    image(logo, this.x-30*widthRata, this.y-30*heightRata, 350*widthRata, 250*heightRata);
  }

}