function BigBoss() {

  this.x = 430*widthRata;
  this.y = -600*heightRata;
  this.r = 150*widthRata;
  this.play = 0;
  this.lives = 50;
  this.xdir = 1;
  this.range = 0;
  this.once = 0; 
  this.destroyed = 0;
 
  this.destroy = function () {
      dragonfood.pause();
      this.destroyed = 1;
      console.log('in destroy', this.x, this.y)
      //this.x = 1000;
         image(explosion, 430*widthRata, this.y-100*heightRata);
         image(explosion, 400*widthRata, this.y-100*heightRata);
         image(explosion, 370*widthRata, this.y-100*heightRata);
       for (var i = 0;i < minions.length; i++) {
          minions[i].destroy();
       }
       this.x = 1000*widthRata*widthRata;
      if (this.once === 0) {
        zap3.play();
        boss_explodes.play();
        this.once++;
      }

  }

  this.move = function() {
    if (this.play < 1) {
      tune.pause();
      dragonfood.play();
      this.play++;
    }
    if (this.y < 100*heightRata) {
      this.y = this.y + 0.7*heightRata;
    }
  }

  this.downUp = function(){
    
    if (this.xdir === 1) {
        this.y += 1;
        this.range -= 1;
      if (this.range < -200*heightRata) {
        this.xdir = 0;
      } 
    } else if (this.xdir === 0) {
        this.y -= 1;
        this.range += 1;
       if (this.range > 0) {
        this.xdir = 1;
        downUp = 0;
      }
    }

  } 

  this.show = function(show = 0){
    // fill(255, 0, 0)
    // ellipse(this.x-170, this.y-100);
    image(gif, this.x-170*widthRata, this.y-100*heightRata, 288*widthRata, 320*heightRata);   
  }

  this.hit = function(){
      //visual
      image(whiteGlow, this.x-170*widthRata, this.y-100*heightRata, 288*widthRata, 320*heightRata);  
      //sound
      zap3.play();
      //remove one life 
      this.lives--;      
  }

  this.collides = function(ship){
    
    var d = dist(this.x-20, this.y-100, ship.x, height-20);
    if (d < this.r*2 + ship.r){
      return true;
    } else {
      return false;
    }
  }



}