function Power(x, y){

  this.x = x;
  this.y = y;
  this.r = 30;
  var down = 0.7;
  var max = this.x+30;
  var min = this.x-30;
  var dir = 1;



  this.show = function(){
    image(flower, this.x, this.y, 60, 60);
  }

  this.move = function(){
    this.y = this.y + down;
    
    if (this.x <= min) {
      dir = 0.5;
    } else if (this.x >= max) {
      dir = -0.5 
    }

    this.x = this.x + dir;
  }

  this.hits = function(ship){
    var d = dist(this.x, this.y, ship.x, 480);
    //console.log('d', this.x, this.y, ship.x, 480, d)
    if (d < this.r + 60) {
      return true;
    } else {
      return false;
    }
  }

  this.eliminate = function(){
    upgrade1.play();
    this.y = 1000;
  }


}