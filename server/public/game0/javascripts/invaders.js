function Invader(x, y, speed = 1, colour = 0) {
  var colours = [myRed, myGreen, myPurple, myBlue];
  this.colour = colours[colour];
  this.x = x;
  this.y = y;
  this.r = 30;
  this.xdir = 1;

 
  this.destroy = function (upgrade) {

      image(explosion, this.x-30, this.y-30, this.r*2, this.r*2);
      zap3.play();
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.move = function() {
  	this.x = this.x + this.xdir*speed;
  }

  this.show = function(game = 0){

    if (game === 1) {
      //image(this.colour, this.x-30, this.y-30, 69.5, 104.75); 
      image(this.colour, this.x-30, this.y-30, 51.3, 138); 
    } else {
      image(this.colour, this.x-30, this.y-30, this.r*2, this.r*2);    
    }

  }



}