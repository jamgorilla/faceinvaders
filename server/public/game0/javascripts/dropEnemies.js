function DropEnemies() {

  var enemiesArr = [rockmonster, crabman];
  this.which = Math.floor(Math.random()*(2-0)+0)
  this.enemy = enemiesArr[this.which];
  //this.xdir = 0;

  
  this.x = Math.random()* (770 - 30)+30;
  this.y = -100;
  this.r = 80;

  this.move = function() {
    //rotate(PI / 3.0) 
    this.y += 3;
  }

  this.show = function(game){
    if (this.which === 0) {
      if (game === 1) {
      image(this.enemy, this.x-70, this.y-30, 120, 137);  
      } else {
       image(this.enemy, this.x-70, this.y-30, 100, 100);   
      }
    } else if (this.which === 1){
      if (game === 1) {
      image(this.enemy, this.x-70, this.y-30, 139, 209.5);    
      } else {
        image(this.enemy, this.x-70, this.y-30, 91.5, 81);
      }
    }
  }

  this.hits = function(ship){
    // fill(255, 255, 255)
    // ellipse(this.x-26, this.y, this.r, this.r)
    var d = dist(this.x-26, this.y, ship.x, height-20);
    if (d < this.r + ship.r){
      return true;
    } else {
      return false;
    }
  }

  this.destroy = function(){

    if (this.which === 0) {
      resist.play();
      resist.setVolume(5);
      return 1;
    } else {
      image(explosion, this.x-50, this.y);
      zap3.play();
      drop2Count--;  
      console.log(drop2Count)  
      
      return 0;
    }
  }

}