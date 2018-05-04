function Ship() {
  this.x = width/2;
  this.xdir = 0;
  this.upgrade = false;
  this.r = 8;
  this.once = 0;

  this.show = function(){
    //image(ship2, this.x-20, height-50, 60, 60);

    if (this.upgrade === true) {
      fill(255);
      rectMode(CENTER);
      rect(this.x, height-20, 40, 60); 
    } else {
      fill(255);
      rectMode(CENTER);
    	rect(this.x, height-20, 20, 60); 
    }
  }

  this.setDir = function (dir) {
    this.xdir = dir;
  }

  this.move = function(dir){
    this.x += this.xdir*5;
  }

  this.upgrade = function(){
    this.upgrade = true;
    this.r = 12;
  }

  this.blowup = function(){
    tune.pause();
    dragonfood.pause();
    if (this.once === 0) {
      loser_wind.play();
      this.once++;
    } 
    for (var i = 0;i< invaders.length;i++) {
      invaders[i].x = 1000;
    }
    ship.x = 1000;
    power.x = 2000;

  }

}