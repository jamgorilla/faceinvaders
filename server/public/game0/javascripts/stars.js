function Star() {

  this.x = Math.random()* (770 - 30)+30;
  this.y = -100;

  this.move = function() {
    this.y += 7;
  
  }

  this.show = function(){

    image(star1, this.x, this.y);    
  }



}