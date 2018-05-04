function Minion(x, y) {

  this.x = x;
  this.y = y;
  this.r = 100*widthRata;
  this.play = 0;
  this.lives = 20;
  this.xdir = 1;
  this.range = 0;
 
  this.destroy = function (upgrade) {

      image(explosion, this.x-30*widthRata, this.y-30*heightRata, this.r*2*widthRata, this.r*2*heightRata);
      zap3.play();
      this.x = 1200*widthRata;
  }

  this.move = function() {
    if (this.y < 45*heightRata) {
      this.y = this.y + 0.5;
    }
  } 

  this.backForth = function() {

     if (this.xdir === 1) {
        this.x += 1;
        this.range -= 1;
      if (this.range < -70*widthRata) {
        this.xdir = 0;
      } 
    } else if (this.xdir === 0) {
        this.x -= 1;
        this.range += 1;
       if (this.range > 70*widthRata) {
        this.xdir = 1;
      }
    }
    

  }

  this.show = function(game = 0){

    if (game === 1) {
      image(minionEn, this.x-84*widthRata, this.y-40*heightRata, 139*widthRata, 209.5*heightRata);  
    } else {
      image(minionEn, this.x-84*widthRata, this.y-40*heightRata, 128.1*widthRata, 113.4*heightRata);   
    }

    // fill(255)
    // ellipse(this.x, this.y, this.r)
  }

  this.hit = function(){
    if (this.y > -100*heightRata) {
      //visual
      image(whiteCrab, this.x-84*widthRata, this.y-40*heightRata, 128.1*widthRata, 113.4*heightRata);  
      //sound
      zap3.play();
      //remove one life 
      this.lives--;

      if (this.lives < 1) {
        this.destroy();
      } 
    }
  }

}